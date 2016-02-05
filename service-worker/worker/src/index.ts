import 'reflect-metadata';
import {Injector, provide} from 'angular2/src/core/di';
import {NgServiceWorker} from './worker';
import {SWContext, ServiceWorkerDriver, SWAdapter, ServiceWorker, BrowserSWAdapter} from './driver';

var w: any = self;

var adapter = new BrowserSWAdapter(w);
var worker = new NgServiceWorker(adapter);

new ServiceWorkerDriver(w, worker);