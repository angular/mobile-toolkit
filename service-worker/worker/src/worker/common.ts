import {FetchDelegate, FetchInstruction, Operation, VersionWorker} from './api';
import {LOG} from './logging';
import {VersionWorkerImpl} from './worker';

export function cacheFromNetworkOp(worker: VersionWorker, url: string, cache: string): Operation {
  let limit = 3;
  const helper = (url: string): Promise<Response> => {
    if (limit-- === 0) {
      return Promise.reject(`Hit redirect limit when attempting to fetch ${url}.`);
    }
    const req = worker.adapter.newRequest(url);
    return worker.refresh(req).then(res => {
      if (res['redirected'] as boolean && res.url && res.url !== '') {
        return helper(res.url);
      }
      return res;
    });
  };
  const op: Operation = () => helper(url)
    .then(resp => worker.cache.store(cache, url, resp));
  op.desc = {type: 'cacheFromNetworkOp', worker, url, cache};
  return op;
}

export function copyExistingCacheOp(oldWorker: VersionWorker, newWorker: VersionWorker, url: string, cache: string): Operation {
  const op: Operation = () => oldWorker
    .cache
    .load(cache, url)
    .then(resp => !!resp
      ? newWorker.cache.store(cache, url, resp).then(() => true)
      : null);
  op.desc = {type: 'copyExistingCacheOp', oldWorker, newWorker, url, cache};
  return op;
}

export function copyExistingOrFetchOp(oldWorker: VersionWorker, newWorker: VersionWorker, url: string, cache: string): Operation {
  const op: Operation = () => copyExistingCacheOp(oldWorker, newWorker, url, cache)()
    .then(res => {
      if (!res) {
        return cacheFromNetworkOp(newWorker, url, cache)();
      }
      return res;
    });
  op.desc = {type: 'copyExistingOrFetchOp', oldWorker, newWorker, url, cache};
  return op;
}

export function deleteCacheOp(worker: VersionWorker, key: string): Operation {
  const op: Operation = () => worker.cache.remove(key);
  op.desc = {type: 'deleteCacheOp', worker, key};
  return op;
}

export function fetchFromCacheInstruction(worker: VersionWorker, req: string | Request, cache: string): FetchInstruction {
  const op: FetchInstruction = (next: FetchDelegate) => worker.cache.load(cache, req)
    .then(res => !!res ? res : next());
  op.desc = {type: 'fetchFromCacheInstruction', worker, req, cache};
  return op;
}

export function fetchFromNetworkInstruction(worker: VersionWorker, req: Request, shouldRefresh: boolean = true): FetchInstruction {
  const op: FetchInstruction = (next: FetchDelegate) => shouldRefresh ? worker.refresh(req) : (worker as any as VersionWorkerImpl).scope.fetch(req);
  op.desc = {type: 'fetchFromNetworkInstruction', worker, req};
  return op;
}

export function rewriteUrlInstruction(worker: VersionWorker, req: Request, destUrl: string): FetchInstruction {
  const newReq = worker.adapter.newRequest(destUrl);
  const op: FetchInstruction = (next: FetchDelegate) => worker.fetch(newReq);
  op.desc = {type: 'rewriteUrlInstruction', worker, req, destUrl};
  return op;
}
