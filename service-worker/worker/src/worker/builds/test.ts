import {bootstrapServiceWorker} from '../bootstrap';
import {StaticContentCache} from '../../plugins/static';
import {RouteRedirection} from '../../plugins/routes';
import {Push} from '../../plugins/push';
import {Verbosity, HttpHandler} from '../logging';

bootstrapServiceWorker({
  manifestUrl: '/ngsw-manifest.json',
  plugins: [
    StaticContentCache(),
    RouteRedirection(),
    Push(),
  ],
  logLevel: Verbosity.DEBUG,
  logHandlers: [
    new HttpHandler('/ngsw-log'),
  ],
});
