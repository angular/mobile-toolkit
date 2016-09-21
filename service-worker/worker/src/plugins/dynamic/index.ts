import {FetchInstruction, NgSwCache, Operation, Plugin, PluginFactory, VersionWorker} from '@angular/service-worker/worker';
import {Observable} from 'rxjs/Observable';

const DEFAULT_NETWORK_WAIT_TIME_MS = 30000;

export function DynamicContentCache(options?: DynamicContentCacheOptions): PluginFactory<DynamicImpl> {
  return (worker: VersionWorker) => new DynamicImpl(worker, options.manifestKey || 'dynamic');
}

export type CachingStrategy = "cacheFirst" | "cacheOnly" | "fastest" | "networkFirst" | "networkOnly";

export interface DynamicContentCacheOptions {
  manifestKey?: string;
}

interface DynamicContentCacheManifest {
  match: UrlMatchConfig[];
}

interface RegexpMap {
  [str: string]: RegExp;
}

export interface UrlMatchOrInvalidateConfig {
  regex?: string;
  url?: string;
  prefix?: boolean;
}

export interface UrlMatchConfig extends UrlMatchOrInvalidateConfig {
  strategy: CachingStrategy;
  waitForNetworkMs?: number;
  invalidates?: UrlMatchOrInvalidateConfig[];
}

export class DynamicImpl implements Plugin<DynamicImpl> {
  errNotFound: Response;
  errGatewayTimeout: Response;
  cacheKey: string;

  private regexpMap = {};

  constructor(
    private worker: VersionWorker,
    private manifestKey: string) {
      this.cacheKey = manifestKey === 'dynamic' ? 'dynamic' : `dynamic:${manifestKey}`;
      this.errGatewayTimeout = 
          this.worker.adapter.newResponse('Gateway Timeout', 504, 'Gateway Timeout');
      this.errNotFound =
        this.worker.adapter.newResponse('Not Found', 404, 'Not Found');
  }

  private get config(): DynamicContentCacheManifest {
    return this.worker.manifest[this.manifestKey] as DynamicContentCacheManifest;
  }

  private regexp(str: string): RegExp {
    if (!this.regexpMap.hasOwnProperty(str)) {
      this.regexpMap[str] = new RegExp(str).compile();
    }
    return this.regexpMap[str];
  }

  setup(ops: Operation[]): void {}

  fetch(req: Request, instructions: FetchInstruction[]): void {
    const match = this.match(req);
    if (!match) {
      return;
    }
    if (req.method === 'GET') {
      this.fetchGet(req, instructions, match);
    } else {
      this.fetchMutate(req, instructions, match);
    }
  }

  private fetchGet(req: Request, instructions: FetchInstruction[], match: UrlMatchConfig) {
    let instruction: FetchInstruction = null;
    const timeoutMs = match.waitForNetworkMs || DEFAULT_NETWORK_WAIT_TIME_MS;
    switch (match.strategy) {
      case 'cacheFirst':
        instruction = this.fetchCacheFirst(req, timeoutMs);
        break;
      case 'cacheOnly':
        instruction = this.fetchCacheOnly(req);
        break;
      case 'fastest':
        instruction = this.fetchFastest(req, timeoutMs);
        break;
      case 'networkFirst':
        instruction = this.fetchNetworkFirst(req, timeoutMs);
        break;
      case 'networkOnly':
        instruction = this.fetchNetworkOnly(req, timeoutMs);
        break;
      default:
        throw new Error(`Unknown caching strategy: ${match.strategy}`);
    }
    instructions.push(instruction);
  }

  private fetchMutate(req: Request, instructions: FetchInstruction[], match: UrlMatchConfig) {
    if (!match.invalidates) {
      return;
    }
    instructions.unshift(this.invalidate(match.invalidates));
  }

  private match(req: Request): UrlMatchConfig {
    return this
      .config
      .match
      .reduce((acc, pattern) => !!acc
        ? acc
        : (this.matchesPattern(req, pattern)
          ? pattern
          : null),
      null);
  }

  private matchesPattern(req: Request, pattern: UrlMatchOrInvalidateConfig): boolean {
    if (pattern.regex) {
      return this.regexp(pattern.regex).test(req.url);
    }
    if (pattern.url) {
      if (pattern.prefix) {
        return req.url.indexOf(pattern.url) === 0;
      } else {
        return req.url === pattern.url;
      }
    }
    return false;
  }

  private invalidate(patterns: UrlMatchOrInvalidateConfig[]): FetchInstruction {
    const instruction: FetchInstruction = () => {
      return this
        .worker
        .cache
        .list(this.cacheKey)
        .mergeMap(keys => keys
          .filter(key => patterns.some(pattern => this.matchesPattern(key, pattern)))
          .map(key => this.worker.cache.invalidate(this.cacheKey, key))
        )
        .switch()
        .ignoreElements();
    };
    instruction.desc = {type: 'invalidate', patterns, plugin: this};
    return instruction;
  }

  private fetchCacheOnly(req: Request): FetchInstruction {
    const instruction: FetchInstruction = () => {
      return Observable.concat(
        this.worker.cache.load(this.cacheKey, req),
        Observable.of(this.errNotFound),
      );
    };
    instruction.desc = {type: 'fetchFastest', req, plugin: this};
    return instruction;
  }

  private fetchNetworkOnly(req: Request, timeoutMs: number): FetchInstruction {
    const instruction: FetchInstruction = () => {
      return Observable
        .merge(
          this.worker.refresh(req),
          this.networkTimeout(timeoutMs)
        )
        .do(resp => {
          if (!resp.ok) {
            return;
          }
          this
            .worker
            .cache
            .store(this.cacheKey, req, resp);
        });
    };
    instruction.desc = {type: 'fetchNetworkOnly', req, timeoutMs, plugin: this};
    return instruction;
  }

  private fetchCacheFirst(req: Request, timeoutMs: number): FetchInstruction {
    const instruction: FetchInstruction = () => {
      return Observable.concat(
        this.worker.cache.load(this.cacheKey, req),
        this.fetchNetworkOnly(req, timeoutMs)()
      );
    }
    instruction.desc = {type: 'fetchCacheFirst', req, timeoutMs, plugin: this};
    return instruction;
  }

  private fetchNetworkFirst(req: Request, timeoutMs: number): FetchInstruction {
    const instruction: FetchInstruction = () => {
      return Observable.concat(
        this
          .fetchNetworkOnly(req, timeoutMs)()
          .filter(resp => resp !== this.errGatewayTimeout),
        this.fetchCacheOnly(req)()
      );
    }
    instruction.desc = {type: 'fetchNetworkFirst', req, timeoutMs, plugin: this};
    return instruction;
  }

  private fetchFastest(req: Request, timeoutMs: number): FetchInstruction {
    const instruction: FetchInstruction = () => {
      return Observable
        .merge(
          this.fetchNetworkOnly(req, timeoutMs)()
            .filter(resp => resp !== this.errGatewayTimeout),
          this.fetchCacheOnly(req)()
            .filter(resp => resp !== this.errNotFound)
        )
        .concat(Observable.of(this.errNotFound));
    };
    instruction.desc = {type: 'fetchFastest', req, plugin: this};
    return instruction;
  }

  private networkTimeout(timeoutMs: number): Observable<Response> {
    const timer =
      Observable
        .timer(timeoutMs)
        .ignoreElements() as Observable<any> as Observable<Response>;
    return Observable.concat(timer, Observable.of(this.errGatewayTimeout));
  }
}
