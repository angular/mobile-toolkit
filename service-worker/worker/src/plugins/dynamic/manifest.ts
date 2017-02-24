import {UrlConfig} from '../../worker';

export interface DynamicManifest {
  group: GroupManifest[];
}

export type GroupStrategy = "backup" | "cache" | "staleWhileRefresh";

export type UrlConfigMap = {[url: string]: UrlConfig};

export interface CacheConfig {
  optimizeFor: string;

  strategy: "lru" | "lfu" | "fifo";
  maxAgeMs?: number;
  maxSizeBytes?: number;
  maxEntries: number;
}

export interface GroupManifest {
  name: string;
  urls: UrlConfigMap;
  cache: CacheConfig;
}
