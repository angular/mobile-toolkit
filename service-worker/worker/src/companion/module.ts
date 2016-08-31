import {NgModule} from '@angular/core';
import {NgServiceWorker} from './comm';

@NgModule({
  providers: [NgServiceWorker],
})
export class ServiceWorkerModule {}
