import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HelloMobileAppComponent } from '../app/hello-mobile.component';

beforeEachProviders(() => [HelloMobileAppComponent]);

describe('App: HelloMobile', () => {
  it('should create the app',
      inject([HelloMobileAppComponent], (app: HelloMobileAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'hello-mobile works!\'',
      inject([HelloMobileAppComponent], (app: HelloMobileAppComponent) => {
    expect(app.title).toEqual('hello-mobile works!');
  }));
});
