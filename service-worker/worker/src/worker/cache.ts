import {NgSwCache} from './facade';

export class ScopedCache implements NgSwCache {

  constructor(private delegate: NgSwCache, private prefix: string) {}

  load(cache: string, req: string | Request) {
    return this.delegate.load(this.prefix + cache, req);
  }

  store(cache: string, req: string | Request, resp: Response): Promise<any> {
    return this.delegate.store(this.prefix + cache, req, resp);
  }

  remove(cache: string): Promise<any> {
    return this.delegate.remove(this.prefix + cache);
  }

  invalidate(cache: string, req: string | Request): Promise<void> {
    return this.delegate.invalidate(this.prefix + cache, req);
  }

  keys(): Promise<string[]> {
    return this
      .delegate
      .keys()
      .then(keys => keys
        .filter(key => key.startsWith(this.prefix))
        .map(key => key.substr(this.prefix.length))
      );
  }
}
