import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {fromByteArray} from 'base64-js';



export function doAsync<T>(fn: (T) => Observable<any>): any {
  return (obs: Observable<T>) => obs
    .concatMap(value => fn(value)
      .reduce(() => value, value));
}

import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/share';

function fromPromise<T>(promiseFn: (() => Promise<T>)): Observable<T> {
  return Observable.create(observer => {
    promiseFn()
      .then(v => observer.next(v))
      .then(() => observer.complete())
      .catch(err => observer.error(err));
  });
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

  get id(): string {
    return this.ps.id;
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
  private controllingWorker: Observable<ServiceWorker>;

  // Always returns the current controlling worker, and waits for one to exist
  // if it does not.
  private awaitSingleControllingWorker: Observable<ServiceWorker>;

  push: Observable<any>;

  constructor(private zone: NgZone) {
    // Extract a typed version of navigator.serviceWorker.
    this.container = navigator['serviceWorker'] as ServiceWorkerContainer;

    // Final Observable that will always give back the current controlling worker,
    // and follow changes over time.
    this.controllingWorker = Observable
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
      .cache(1);
    
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
  }

  private registrationForWorker(): ((obs: Observable<ServiceWorker>) => Observable<ServiceWorkerRegistration>) {
    return (obs: Observable<ServiceWorker>) => {
      return obs
        .switchMap<ServiceWorkerRegistration>((worker, index) => {
          return fromPromise(() => this.container.getRegistrations())
            .expand<ServiceWorkerRegistration>(v => Observable.from(v))
            .filter(reg => reg.active === worker)
            .take(1);
        });
    };
  }

  // Sends a single message to the worker, and awaits one (or more) responses.
  private sendToWorker(worker: ServiceWorker, message: Object): Observable<any> {
    // A MessageChannel is sent with the message so responses can be correlated.
    let channel = new MessageChannel()
    // Observe replies.
    let result = Observable
      // Subscribe to port1's message event, which will deliver any response(s).
      .fromEvent(channel.port1, 'message')
      // Extract the data from the MessageEvent.
      .map((event: MessageEvent) => event.data)
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
    let channel = new MessageChannel();
    
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

  registerForPush(): Observable<NgPushRegistration> {
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
              return pushManager
                .subscribe({userVisibleOnly: true})
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
}
