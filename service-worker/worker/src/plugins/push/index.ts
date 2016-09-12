import {
  Operation,
  Plugin,
  PluginFactory,
  VersionWorker
} from '@angular/service-worker/worker';

import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

interface PushManifest {
  showNotifications?: boolean;
  backgroundOnly?: boolean;
}
const EMPTY_MANIFEST: PushManifest = {};

const NOTIFICATION_OPTION_NAMES = [
  'actions',
  'body',
  'dir',
  'icon',
  'lang',
  'renotify',
  'requireInteraction',
  'tag',
  'vibrate',
  'data'
];

function pushesOp(push: PushImpl): Operation {
  const op: Operation = () => push.pushes;
  op.desc = {type: 'pushesOp', push};
  return op;
}

export function Push(): PluginFactory<PushImpl> {
  return (worker: VersionWorker) => new PushImpl(worker);
}

export class PushImpl implements Plugin<PushImpl> {

  private pushBuffer: any[] = [];
  private pushSubject: Subject<any> = new Subject<any>();
  pushes: Observable<any>;

  private get pushManifest(): PushManifest {
    return this.worker.manifest['push'] as PushManifest || EMPTY_MANIFEST;
  }

  constructor(private worker: VersionWorker) {
    this.pushes = Observable.create(observer => {
      this.pushBuffer.forEach(data => observer.next(data));
      this.pushBuffer = null;
      const sub = this.pushSubject.subscribe(observer);
      return () => {
        sub.unsubscribe();
        this.pushBuffer = [];
      };
    });
  }

  setup(ops: Operation[]): void {}

  message(message: any, ops: Operation[]): void {
    switch (message['cmd']) {
      case 'push':
        ops.push(pushesOp(this));
        break;
    }
  }

  push(data: any): void {
    this.maybeShowNotification(data);
    if (this.pushBuffer === null) {
      this.pushSubject.next(data);
    } else {
      this.pushBuffer.push(data);
    }
  }

  maybeShowNotification(data: any) {
    if (!data.notification || !data.notification.title) {
      return;
    }
    const manifest = this.pushManifest;
    if (!manifest.showNotifications || (!!manifest.backgroundOnly && this.pushBuffer === null)) {
      return;
    }
    const desc = data.notification as Object;
    let options = {};
    NOTIFICATION_OPTION_NAMES
      .filter(name => desc.hasOwnProperty(name))
      .forEach(name => options[name] = desc[name]);
    this.worker.showNotification(desc['title'], options);
  }
}