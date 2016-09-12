import {SHA1} from 'jshashes';

export interface Manifest {
  [key: string]: any;
  _hash: string;
  _json: string;
}

export function parseManifest(data: string): Manifest {
  const manifest: Manifest = JSON.parse(data) as Manifest;
  manifest._json = data;
  manifest._hash = new SHA1().hex(data);
  return manifest;
}
