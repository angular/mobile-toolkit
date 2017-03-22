import {bootstrapServiceWorker} from '../bootstrap';
import {StaticContentCache} from '../../plugins/static';
import {ExternalContentCache} from '../../plugins/external';
import {RouteRedirection} from '../../plugins/routes';
import {Push} from '../../plugins/push';
import {Verbosity, HttpHandler} from '../logging';

bootstrapServiceWorker({
  manifestUrl: '/ngsw-manifest.json',
  plugins: [
    StaticContentCache(),
    ExternalContentCache(),
    RouteRedirection(),
    Push(),
  ],
  logLevel: Verbosity.DEBUG,
  logHandlers: [
    new HttpHandler('/ngsw-log'),
  ],
});
