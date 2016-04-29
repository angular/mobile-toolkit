import 'reflect-metadata';
import {ManifestParser, ManifestEntry} from '../src/manifest';
/*
const SIMPLE_MANIFEST = `CACHE MANIFEST
/test/url/alpha
/test/url/beta
`;

const FULL_MANIFEST = `CACHE MANIFEST
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
/alpha/a
/alpha/b
# sw.group: beta
/beta/a
/beta/b`;

function urls(entries: ManifestEntry[]): string[] {
  return entries.map(entry => entry.url);
}

function grouped(name: string, entries: ManifestEntry[]): ManifestEntry[] {
  return entries.filter(entry =>
    entry.groupMetadata.hasOwnProperty('group') &&
    entry.groupMetadata['group'] == name);
}

describe('ManifestParser', () => {
  let parser: ManifestParser;
  beforeEach(() => {
    parser = new ManifestParser();
  });
  it('correctly parses a basic manifest', () => {
    let manifest = parser.parse(SIMPLE_MANIFEST);
    expect(urls(manifest.cache)).toEqual([
      '/test/url/alpha',
      '/test/url/beta'
    ]);
  });
  it('parses a manifest with all the sections', () => {
    let manifest = parser.parse(FULL_MANIFEST);
    expect(urls(manifest.cache)).toEqual([
      '/default',
      '/cached'
    ]);
    expect(urls(manifest.network)).toEqual(['*']);
    expect(urls(manifest.fallback)).toEqual(['/from']);
    expect(manifest.fallback.map(entry => entry.fallbackTo)).toEqual(['/to']);
  });
  it('splits files into groups when requested', () => {
    let manifest = parser.parse(BUNDLED_MANIFEST);
    let alphaEntries = grouped('alpha', manifest.cache);
    let betaEntries = grouped('beta', manifest.cache);
    expect(urls(alphaEntries)).toEqual([
      '/alpha/a',
      '/alpha/b'
    ]);
    expect(urls(betaEntries)).toEqual([
      '/beta/a',
      '/beta/b'
    ]); 
  });
});
*/