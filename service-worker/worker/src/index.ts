import {WorkerScope, Events} from './context';
import {ManifestParser} from './manifest';
import {ServiceWorker} from './worker';
import {Fetch} from './fetch';
import {CacheManager} from './cache';

import './rxjs';

export * from './cache';
export * from './context';
export * from './manifest';
export * from './worker';
export * from './fetch';

export var SW_PROVIDERS = [
  CacheManager,
  Events,
  Fetch,
  ManifestParser,
  ServiceWorker
];
