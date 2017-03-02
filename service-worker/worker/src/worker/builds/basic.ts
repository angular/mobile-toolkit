import {bootstrapServiceWorker} from '../bootstrap';
import {StaticContentCache} from '../../plugins/static';
import {RouteRedirection} from '../../plugins/routes';
import {Push} from '../../plugins/push';

bootstrapServiceWorker({
  manifestUrl: 'ngsw-manifest.json',
  plugins: [
    StaticContentCache(),
    RouteRedirection(),
    Push(),
  ],
});
