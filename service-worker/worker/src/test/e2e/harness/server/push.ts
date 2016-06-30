declare interface WebPushParams {
  TTL?: number;
  userPublicKey?: Buffer;
  userAuth?: Buffer;
  payload?: any;
  vapid?: any;
}

declare interface WebPush {
  sendNotification(endpoint: string, params: WebPushParams): Promise<any>;
  setGCMAPIKey(key: string);
}

let push: WebPush = require('web-push');

export function sendPush(reg: any, payload?: Object): Promise<any> {
  let endpoint = reg.url;

  return push.sendNotification(endpoint, {
    userPublicKey: reg.key,
    userAuth: reg.auth
  });
}

export function setGCMAPIKey(key: string): void {
  push.setGCMAPIKey(key);
}