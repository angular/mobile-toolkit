import {Observable} from 'rxjs/Observable';

export class NgServiceWorker {

  // Typed reference to navigator.serviceWorker.
  private container: ServiceWorkerContainer;

  // Always returns the current controlling worker, or undefined if there isn't one.
  private controllingWorker: Observable<ServiceWorkerRegistration>;

  // Always returns the current controlling worker, and waits for one to exist
  // if it does not.
  private awaitSingleControllingWorker: Observable<ServiceWorkerRegistration>;

  postMessage: Observable<any>;

  constructor() {
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

  private send(message: Object): Observable<Object> {
    let channel = new MessageChannel();
    return null;
  }

  ping(): Observable<void> {
    return null;
  }
}
