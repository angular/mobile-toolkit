export abstract class WorkerScope {
  abstract fetch(url: string | Request): Promise<Response>;
  abstract newRequest(input: string | Request, init?: RequestInit): Request;
  abstract newResponse(body?: BodyInit, init?: ResponseInit): Response;
  caches: CacheStorage;
}

export class BrowserWorkerScope {
  fetch(url: string | Request): Promise<Response> {
    return fetch(url);
  }

  get caches() {
    return caches;
  }

  newRequest(input: string | Request, init?: RequestInit): Request {
    return new Request(input, init);
  }

  newResponse(body?: BodyInit, init?: ResponseInit) {
    return new Response(body, init);
  }
}

