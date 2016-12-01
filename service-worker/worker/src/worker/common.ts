import {FetchInstruction, Operation, VersionWorker} from './api';
import {LOG} from './logging';
import {VersionWorkerImpl} from './worker';

import {Observable} from 'rxjs/Observable';

export function cacheFromNetworkOp(worker: VersionWorker, url: string, cache: string): Operation {
  const op: Operation = () => worker
    .refresh(worker.adapter.newRequest(url))
    .switchMap(resp => worker.cache.store(cache, url, resp));
  op.desc = {type: 'cacheFromNetworkOp', worker, url, cache};
  return op;
}

export function copyExistingCacheOp(oldWorker: VersionWorker, newWorker: VersionWorker, url: string, cache: string): Operation {
  const op: Operation = () => oldWorker
    .cache
    .load(cache, url)
    .switchMap(resp => !!resp
      ? newWorker.cache.store(cache, url, resp)
      : Observable.empty());
  op.desc = {type: 'copyExistingCacheOp', oldWorker, newWorker, url, cache};
  return op;
}

export function copyExistingOrFetchOp(oldWorker: VersionWorker, newWorker: VersionWorker, url: string, cache: string): Operation {
  const op: Operation = () => Observable
    .concat(
      copyExistingCacheOp(oldWorker, newWorker, url, cache)(),
      cacheFromNetworkOp(newWorker, url, cache)()
    )
    .take(1);
  op.desc = {type: 'copyExistingOrFetchOp', oldWorker, newWorker, url, cache};
  return op;
}

export function deleteCacheOp(worker: VersionWorker, key: string): Operation {
  const op: Operation = () => worker.cache.remove(key);
  op.desc = {type: 'deleteCacheOp', worker, key};
  return op;
}

export function fetchFromCacheInstruction(worker: VersionWorker, req: string | Request, cache: string): FetchInstruction {
  const op: FetchInstruction = () => worker
    .cache
    .load(cache, req)
    .filter(v => !!v);
  op.desc = {type: 'fetchFromCacheInstruction', worker, req, cache};
  return op;
}

export function fetchFromNetworkInstruction(worker: VersionWorker, req: Request, shouldRefresh: boolean = true): FetchInstruction {
  const op: FetchInstruction = () => shouldRefresh ? worker.refresh(req) : (worker as VersionWorkerImpl).scope.fetch(req);
  op.desc = {type: 'fetchFromNetworkInstruction', worker, req};
  return op;
}

export function rewriteUrlInstruction(worker: VersionWorker, req: Request, destUrl: string): FetchInstruction {
  const newReq = worker.adapter.newRequest(destUrl);
  const op: FetchInstruction = () => worker
    .fetch(newReq);
  op.desc = {type: 'rewriteUrlInstruction', worker, req, destUrl};
  return op;
}
