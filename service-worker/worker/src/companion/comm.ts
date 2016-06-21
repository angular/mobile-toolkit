import {Observable} from 'rxjs/Observable';

export class NgServiceWorker {

  // Typed reference to navigator.serviceWorker.
  private container: ServiceWorkerContainer;

  // Always returns the current controlling worker, or undefined if there isn't one.
  private controllingWorker: Observable<ServiceWorkerRegistration>;

  // Always returns the current controlling worker, and waits for one to exist
  // if it does not.
  private awaitSingleControllingWorker: Observable<ServiceWorkerRegistration>;

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

  // Sends a single message to the worker, and awaits one (or more) responses.
  private sendToWorker(worker: ServiceWorkerRegistration, message: Object): Observable<any> {
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

  registerForPush(): Observable<any> {
    return null;
  }
}
