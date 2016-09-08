
import {Component, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ControllerCmp} from './src/controller';
import {ServiceWorkerModule} from '@angular/service-worker';


@Component({
  selector: 'sw-testing-harness',
  template: `
<h1>Service Worker Testing Harness</h1>
<controller></controller>
`,
})
class SwTestingHarnessCmp {}

@NgModule({
  declarations: [
    SwTestingHarnessCmp,
    ControllerCmp,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule,
  ],
  bootstrap: [SwTestingHarnessCmp],
})
export class SwTestingHarnessModule {}

platformBrowserDynamic().bootstrapModule(SwTestingHarnessModule);
