import {AppCacheManifestReader} from '../src/manifest';

describe('service worker manifest', () => {
	describe('reader', () => {
		it('reads a simple manifest correctly', () => {
			var reader = new AppCacheManifestReader();
			reader.read(`
CACHE MANIFEST
/url/1.txt
/url/2.txt`);
			var manifest = reader.swManifest;
			expect(manifest).not.toBe(null);
			expect(manifest.bundles.hasOwnProperty('default')).toBe(true);
			var bundle = manifest.bundles['default'];
			expect(bundle.files.length).toBe(2);
			expect(bundle.files[0].url).toBe('/url/1.txt');
			expect(bundle.files[1].url).toBe('/url/2.txt');
		});
		it('applies versions to bundles', () => {
			var reader = new AppCacheManifestReader();
			reader.read(`
CACHE MANIFEST
# sw.version: 3
/url/1.txt`);
			var manifest = reader.swManifest;
			expect(manifest.bundles.hasOwnProperty('default')).toBe(true);
			var bundle = manifest.bundles['default'];
			expect(bundle.version).toBe('3');
		});
		it('splits files into multiple bundles', () => {
			var reader = new AppCacheManifestReader();
			reader.read(`
CACHE MANIFEST
# sw.bundle: alpha
/alpha/foo.txt
# sw.bundle: beta
/beta/foo.txt`);
			var manifest = reader.swManifest;
			expect(manifest.bundles.hasOwnProperty('alpha')).toBeTruthy();
			expect(manifest.bundles.hasOwnProperty('beta')).toBeTruthy();
			expect(manifest.bundles.hasOwnProperty('delta')).toBeFalsy();
			var alpha = manifest.bundles['alpha'];
			var beta = manifest.bundles['beta'];
			expect(alpha.files.length).toBe(1);
			expect(alpha.files[0].url).toBe('/alpha/foo.txt');
			expect(beta.files.length).toBe(1);
			expect(beta.files[0].url).toBe('/beta/foo.txt');
		});
	});
});