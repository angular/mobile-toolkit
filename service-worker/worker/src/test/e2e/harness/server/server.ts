import express = require('express');

export function create(port: number, harnessPath: string): Promise<Server> {
  return new Promise((resolve, reject) => {
    let server;
    server = new Server(port, harnessPath, () => resolve(server));
  });
}

export class Server {
  app: any;
  server: any;
  
  responses: Object = {};

  constructor(port: number, harnessPath: string, readyCallback: Function) {
    this.app = express();
    this.app.use(express.static(harnessPath));
    this.server = this.app.listen(port, () => readyCallback());
  }

  addResponse(url: string, response: string) {
    let urlExisted = this.responses.hasOwnProperty(url);

    // Add the response.
    this.responses[url] = response;

    if (urlExisted) {
      // A handler for this URL is already registered.
      return;
    }

    // Register a handler for the URL, that doesn't use the response
    // passed but instead return  
    this.app.get(url, (req, resp) => {
      let response = this.responses[url];
      if (!response) {
        return;
      }
      resp.send(response);
    });
  }

  clearResponses() {
    this.responses = {};
  }

  shutdown() {
    this.server.close();
  }
}