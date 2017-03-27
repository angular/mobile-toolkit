import {bootstrapServiceWorker} from '../bootstrap';
import {StaticContentCache} from '../../plugins/static';
import {ExternalContentCache} from '../../plugins/external';
import {RouteRedirection} from '../../plugins/routes';
import {Push} from '../../plugins/push';

bootstrapServiceWorker({
  manifestUrl: 'ngsw-manifest.json',
  plugins: [
    StaticContentCache(),
    ExternalContentCache(),
    RouteRedirection(),
    Push(),
  ],
});
