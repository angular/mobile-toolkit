import {Observable} from 'rxjs/Observable';
import {LiteSubject} from './rxjs';

export enum Verbosity {
  DEBUG = 1,
  TECHNICAL = 2,
  INFO = 3,
  STATUS = 4,
  DISABLED = 1000,
}

export interface LogEntry {
  message: string;
  verbosity: Verbosity;
}

export interface Logging {
  debug(message: string, ...args: any[]): void;
  technical(message: string, ...args: any[]): void;
  info(message: string, ...args: any[]): void;
  status(message: string, ...args: any[]): void;
  log(verbosity: Verbosity, message: string, ...args: any[]): void;
}

export interface LogHandler {
  handle(msg: LogEntry);
}

export class Logger implements Logging {

  private buffer: LogEntry[] = [];
  private subject = new LiteSubject<LogEntry>();
  private verbosity = Verbosity.DISABLED;

  constructor() {}

  get messages(): Observable<LogEntry> {
    return this.subject.observable;
  }

  debug(message: string, ...args: any[]): void {
    this._log(Verbosity.DEBUG, message, args);
  }

  technical(message: string, ...args: any[]): void {
    this._log(Verbosity.TECHNICAL, message, args);
  }

  info(message: string, ...args: any[]): void {
    this._log(Verbosity.INFO, message, args);
  }

  status(message: string, ...args: any[]): void {
    this._log(Verbosity.STATUS, message, args);
  }

  log(verbosity: Verbosity, message: string, ...args: any[]): void {
    this._log(verbosity, message, args);
  }

  setVerbosity(verbosity: Verbosity): void {
    this.verbosity = verbosity;
  }

  release(): void {
    this.buffer.forEach(entry => this.subject.next(entry));
    this.buffer = null;
  }

  private _log(verbosity: Verbosity, start: string, args: any[]) {
    let message = start;
    if (args.length > 0) {
      message = `${start} ${args.map(v => this._serialize(v)).join(' ')}`
    }
    if (verbosity < this.verbosity) {
      // Skip this message.
      return;
    }
  
    if (this.buffer !== null) {
      this.buffer.push({verbosity, message});
    } else {
      this.subject.next({verbosity, message});
    }
  }

  private _serialize(v: any) {
    if (typeof v !== 'object') {
      return `${v}`;
    }
    return JSON.stringify(v);
  }
}

export class ConsoleHandler implements LogHandler {
  handle(entry: LogEntry) {
    console.log(`${Verbosity[entry.verbosity].toString()}: ${entry.message}`);
  }
}

export class HttpHandler implements LogHandler {
  constructor(private url: string) {}

  handle(entry: LogEntry) {
    fetch(this.url, {body: `${Verbosity[entry.verbosity].toString()}: ${entry.message}`, method: 'POST'});
  }
}

export const LOGGER = new Logger();
export const LOG = LOGGER as Logging;
