import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

export enum Verbosity {
  INFO = 1,
  DETAIL = 2,
  TECHNICAL = 3
}

interface LogEntry {
  message: string;
  verbosity: Verbosity;
}

// A buffer to store log messages until a subscriber connects. 
let logBuffer: LogEntry[] = [];

// Subject which will be used to broadcast log messages once there's a subscriber.
let logSubject: Subject<LogEntry> = null;

let logLevel = Verbosity.INFO;

// The stream of log messages. May return buffered messages to the first subscriber,
// if buffering has not been disabled. Thereafter returns messages as they're logged.
let logStream = Observable.create(observer => {
  // Create the subject if it doesn't exist already.
  if (logSubject === null) {
    logSubject = new Subject<LogEntry>();
  }

  // An Observable representing buffered messages. Initialized to empty.
  let buffered: Observable<LogEntry> = Observable.empty<LogEntry>();

  // If the buffer exists, make it Observable.
  if (logBuffer !== null) {
    buffered = Observable.from(logBuffer);
    logBuffer = null;
  }

  // Combine (possibly empty) buffered messages with the subject, and pipe them to the
  // subscriber.
  return buffered
    .concat(logSubject)
    .subscribe(observer);
});

// Log a message at the given log level.
export function log(verbosity: Verbosity, message: string) {
  // If the buffer is active, log it there. If the Subject is active, log there.
  if (logBuffer !== null) {
    logBuffer.push({verbosity, message});
  } else if (logSubject !== null) {
    logSubject.next({verbosity, message});
  }
}

export function readLog(verbosity: Verbosity): Observable<string> {
  return logStream
    .filter(entry => entry.verbosity <= logLevel)
    .map(entry => entry.message);
}

export function setLogLevel(verbosity: Verbosity): void {
  logLevel = verbosity;
}

export function disableLogBuffering(): void {
  logBuffer = null;
}