import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HelloMobileAppComponent, environment } from './app/';
import { APP_SHELL_RUNTIME_PROVIDERS } from '@angular/app-shell';

if (environment.production) {
  enableProdMode();
}

bootstrap(HelloMobileAppComponent, [ APP_SHELL_RUNTIME_PROVIDERS ]);

