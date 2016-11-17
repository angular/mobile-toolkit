export interface NgSwAdapter {
  newRequest(req: string | Request, init?: Object): Request;
  newResponse(body: string | Blob, init?: Object): Response;
}