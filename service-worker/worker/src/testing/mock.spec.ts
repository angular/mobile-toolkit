import {TestWorkerDriver} from './mock';

class TestWorker {}

describe('TestWorkerDriver (mock)', () => {
  let driver: TestWorkerDriver;
  beforeEach(() => {
    driver = new TestWorkerDriver(() => new TestWorker);
  });
  it('properly passes install events through', (done) => {
    driver.triggerInstall().then(() => done());
  });
});
