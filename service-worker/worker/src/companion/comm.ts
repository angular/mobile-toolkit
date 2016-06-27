import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {fromByteArray} from 'base64-js';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/let';
import 'rxjs/add/observable/from';

function fromPromise<T>(promiseFn: (() => Promise<T>)): Observable<T> {
  return Observable.create(observer => {
    promiseFn()
      .then(v => observer.next(v))
      .then(() => observer.complete())
      .catch(err => observer.error(err));
  });
}

export class NgPushRegistration {
  private ps: PushSubscription;

  constructor(
      ps: any,
      public messages: Observable<Object>) {
    this.ps = ps;
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

  private readPush(): Observable<Object> {
    return this.send({
      cmd: 'push'
    });
  }

  registerForPush(): Observable<NgPushRegistration> {
    console.log('registerForPush()');
    return this
      .awaitSingleControllingWorker
      .let(this.registrationForWorker())
      .do(worker => window['wkr'] = worker)
      .map(worker => worker.pushManager)
      .switchMap(pushManager => {
        let reg: Observable<NgPushRegistration> = Observable.create(observer => {
          console.log('trying to register');
          let regFromSub = (sub: PushSubscription) => new NgPushRegistration(sub, this.readPush());
          pushManager
            .getSubscription()
            .then(sub => {
              console.log('checked subscription', sub);
              if (sub) {
                console.log('have subscription', sub.endpoint);
                return regFromSub(sub);
              }
              console.log('trying to subscribe');
              return pushManager
                .subscribe({userVisibleOnly: true})
                .then(res => {
                  console.log('registered', res.endpoint);
                  return res;
                })
                .then(regFromSub)
                .catch(err => {
                  console.error(err);
                  return null;
                });
            })
            .then(sub => this.zone.run(() => observer.next(sub)))
            .then(() => this.zone.run(() => observer.complete()))
            .catch(err => this.zone.run(() => observer.error(err)));
        });
        return reg;
      });
  }
}
