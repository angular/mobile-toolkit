import {Injectable} from '@angular/core';
import {TestWorkerDriver} from './mock';

@Injectable()
class TestWorker {}

describe('TestWorkerDriver (mock)', () => {
  let driver: TestWorkerDriver;
  beforeEach(() => {
    driver = new TestWorkerDriver(TestWorker);
  });
  it('properly passes install events through', (done) => {
    driver.triggerInstall().then(() => done());
  });
});