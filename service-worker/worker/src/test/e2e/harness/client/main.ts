
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ControllerCmp} from './src/controller';
import {NgServiceWorker} from '@angular/service-worker';


@Component({
  selector: 'sw-testing-harness',
  directives: [ControllerCmp],
  template: `
<h1>Service Worker Testing Harness</h1>
<controller></controller>
`,
})
class SwTestingHarnessCmp {}

bootstrap(SwTestingHarnessCmp, [
  NgServiceWorker
]);