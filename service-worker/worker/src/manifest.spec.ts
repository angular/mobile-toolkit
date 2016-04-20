import 'reflect-metadata';
import {ManifestParser, ManifestEntry, ManifestEntryMap} from '../src/manifest';

const SIMPLE_MANIFEST = `CACHE MANIFEST
# sw.group.version: test
/test/url/alpha
/test/url/beta
`;

const FULL_MANIFEST = `CACHE MANIFEST
# sw.group.version: test
/default
CACHE:
/cached
NETWORK:
*
FALLBACK:
/from /to`;

const BUNDLED_MANIFEST = `CACHE MANIFEST
CACHE:
# sw.group: alpha
# sw.group.version: 12345
/alpha/a
/alpha/b
# sw.group: beta
# sw.group.version: 67890
/beta/a
/beta/b`;

function urls(entries: ManifestEntryMap): string[] {
  return Object.keys(entries);
}

describe('ManifestParser', () => {
  let parser: ManifestParser;
  beforeEach(() => {
    parser = new ManifestParser();
  });
  it('correctly parses a basic manifest', () => {
    let manifest = parser.parse(SIMPLE_MANIFEST);
    expect(urls(manifest.group['default'].cache)).toEqual([
      '/test/url/alpha',
      '/test/url/beta'
    ]);
  });
  it('parses a manifest with all the sections', () => {
    let manifest = parser.parse(FULL_MANIFEST);
    let defaultGroup = manifest.group['default'];
    expect(urls(defaultGroup.cache)).toEqual([
      '/default',
      '/cached'
    ]);
    expect(urls(defaultGroup.network)).toEqual(['*']);
    expect(urls(defaultGroup.fallback)).toEqual(['/from']);
    expect(Object.keys(defaultGroup.fallback).map(url => defaultGroup.fallback[url].fallbackTo)).toEqual(['/to']);
  });
  it('splits files into groups when requested', () => {
    let manifest = parser.parse(BUNDLED_MANIFEST);
    let defaultGroup = manifest.group['default'];
    expect(urls(manifest.group['alpha'].cache)).toEqual([
      '/alpha/a',
      '/alpha/b'
    ]);
    expect(urls(manifest.group['beta'].cache)).toEqual([
      '/beta/a',
      '/beta/b'
    ]); 
  });
});
