import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {fromByteArray} from 'base64-js';

export function doAsync<T>(fn: (T) => Observable<any>): any {
  return (obs: Observable<T>) => obs
    .concatMap(value => fn(value)
      .reduce(() => value, value));
}

import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeWhile';

export interface PushOptions {
  applicationServerKey?: string;
}

function fromPromise<T>(promiseFn: (() => Promise<T>)): Observable<T> {
  return Observable.create(observer => {
    promiseFn()
      .then(v => observer.next(v))
      .then(() => observer.complete())
      .catch(err => observer.error(err));
  });
}

export interface UpdateEvent {
  type: "pending" | "activation";
  version?: string;
}

// A push notification registration, including the endpoint URL and encryption keys.
export class NgPushRegistration {
  private ps: PushSubscription;

  constructor(ps: any) {
    this.ps = ps;
  }

  // Get the authentication key
  auth(): string {
    return this.key('auth');
  }

  key(method: string = 'p256dh'): string {
    return fromByteArray(new Uint8Array(this.ps.getKey(method)));
  }

  get url(): string {
    return this.ps.endpoint;
  }

  toJSON(): Object {
    return this.ps.toJSON();
  }

  unsubscribe(): Observable<boolean> {
    // TODO: switch to Observable.fromPromise when it's not broken.
    return fromPromise(() => this.ps.unsubscribe());
  }
}

@Injectable()
export class NgServiceWorker {

  // Typed reference to navigator.serviceWorker.
  private container: ServiceWorkerContainer;

  // Always returns the current controlling worker, or undefined if there isn't one.
  private controllingWorker = new BehaviorSubject<ServiceWorker>(undefined);

  // Always returns the current controlling worker, and waits for one to exist
  // if it does not.
  private awaitSingleControllingWorker: Observable<ServiceWorker>;

  push: Observable<any>;

  updates: Observable<UpdateEvent>;

  constructor(private zone: NgZone) {
    // Extract a typed version of navigator.serviceWorker.
    this.container = (typeof navigator === 'object') && navigator['serviceWorker'] as ServiceWorkerContainer;

    if (!!this.container) {
      // Final Observable that will always give back the current controlling worker,
      // and follow changes over time.
      Observable
        // Combine current and future controllers.
        .concat(
          // Current controlling worker (if any).
          Observable.of(this.container.controller),
          // Future changes of the controlling worker.
          Observable
            // Track changes of the controlling worker via the controllerchange event.
            .fromEvent(this.container, 'controllerchange')
            // Read the new controller when it changes.
            .map(_ => this.container.controller)
        )
        // Cache the latest controller for immediate delivery.
        .subscribe(
          worker => this.controllingWorker.next(worker),
          err => this.controllingWorker.error(err),
          () => this.controllingWorker.complete(),
        );
    }
    
    // To make one-off calls to the worker, awaitSingleControllingWorker waits for
    // a controlling worker to exist.
    this.awaitSingleControllingWorker = this
      .controllingWorker
      .filter(worker => !!worker)
      .take(1);

    // Setup the push Observable as a broadcast mechanism for push notifications.
    this.push = Observable
      .defer(() => this.send({cmd: 'push'}))
      .share();

    // Setup the updates Observable as a broadcast mechanism for update notifications.
    this.updates = Observable
      .defer(() => this.send({cmd: 'update'}))
      .share();
  }

  private registrationForWorker(): ((obs: Observable<ServiceWorker>) => Observable<ServiceWorkerRegistration>) {
    return (obs: Observable<ServiceWorker>) => obs
      .switchMap(worker => fromPromise(() => this.container.getRegistrations() as Promise<ServiceWorkerRegistration[]>)
        .expand(regs => Observable.from(regs))
        .filter(reg => reg.active === worker)
        .take(1)
      );
  }

  // Sends a single message to the worker, and awaits one (or more) responses.
  private sendToWorker(worker: ServiceWorker, message: Object): Observable<any> {
    // A MessageChannel is sent with the message so responses can be correlated.
    const channel = new MessageChannel()
    // Observe replies.
    const result = new Observable<any>(observer => {
        let cancelId = null;
        const listener = (event: MessageEvent) => {
          const data = event.data;
          if (!!data && typeof data === "object" && data.hasOwnProperty('$ngsw') && data.hasOwnProperty('id')) {
            cancelId = data['id'];
          } else if (data === null) {
            observer.complete();
            channel.port1.removeEventListener('message', listener);
            return;
          } else {
            observer.next(data);
          }
        };
        channel.port1.addEventListener('message', listener);
        return () => {
          channel.port1.removeEventListener('message', listener);
          this.sendToWorker(worker, {cmd: 'cancel', id: cancelId});
        };
      })
      // Instead of complicating this with 'close' events, complete on a null value.
      .takeWhile(v => !!v)
      // The message will be sent before the consumer has a chance to subscribe to
      // the response Observable, so publishReplay() records any responses and ensures
      // they arrive properly.
      .publishReplay();

    // Connecting actually creates the event subscription and starts recording
    // for replay.
    result.connect();

    // Start receiving message(s).
    channel.port1.start();

    // Set a magic value in the message.
    message['$ngsw'] = true;

    worker.postMessage(message, [channel.port2]);
    return result;
  }

  // Send a message to the current controlling worker, waiting for one if needed.
  private send(message: Object): Observable<any> {
    return this
      // Wait for a controlling worker to exist.
      .awaitSingleControllingWorker
      // Send the message and await any replies. switchMap is chosen so if a new
      // controlling worker arrives somehow, the message will still get through. 
      .switchMap(worker => this.sendToWorker(worker, message));
  }

  // Send a 'ping' to the worker. The returned Observable will complete when the worker
  // acknowledges the message. This provides a test that the worker is alive and listening.
  ping(): Observable<any> {
    return this.send({
      cmd: 'ping'
    });
  }

  log(): Observable<string> {
    return this.send({
      cmd: 'log'
    });
  }

  activateUpdate(version: string): Observable<boolean> {
    return this.send({
      cmd: 'activateUpdate',
      version,
    });
  }

  registerForPush(pushOptions: PushOptions = {}): Observable<NgPushRegistration> {
    return this
      // Wait for a controlling worker to exist.
      .awaitSingleControllingWorker
      // Get the ServiceWorkerRegistration for the worker.
      .let(this.registrationForWorker())
      // Access the PushManager used to control push notifications.
      .map((worker: ServiceWorkerRegistration) => worker.pushManager)
      .switchMap(pushManager => {
        // Create an Observable to wrap the Promises of the PushManager API.
        // TODO: switch to Observable.fromPromise when it's not broken.
        // This is extracted as a variable so Typescript infers types correctly.
        let reg: Observable<NgPushRegistration> = Observable.create(observer => {
          // Function that maps subscriptions to an Angular-specific representation.
          let regFromSub = (sub: PushSubscription) => new NgPushRegistration(sub);

          pushManager
            // First, check for an existing subscription.
            .getSubscription()
            .then(sub => {
              // If there is one, we don't need to register, just return it.
              if (!!sub) {
                return regFromSub(sub);
              }
              // No existing subscription, register (with userVisibleOnly: true).
              let options = {
                userVisibleOnly: true,
              } as Object;
              if (pushOptions.applicationServerKey) {
                let key = atob(pushOptions
                  .applicationServerKey
                  .replace(/_/g, '/')
                  .replace(/-/g, '+'));
                let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
                for (let i = 0; i < key.length; i++) {
                  applicationServerKey[i] = key.charCodeAt(i);
                }
                options['applicationServerKey'] = applicationServerKey;
              }
              return pushManager
                .subscribe(options)
                .then(regFromSub);
            })
            // Map from promises to the Observable being returned.
            .then(sub => this.zone.run(() => observer.next(sub)))
            .then(() => this.zone.run(() => observer.complete()))
            .catch(err => this.zone.run(() => observer.error(err)));
        });
        return reg;
      });
  }

  checkForUpdate(): Observable<boolean> {
    return this.send({cmd: 'checkUpdate'});
  }
}
