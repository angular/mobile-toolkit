import 'reflect-metadata';
import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone.js';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test.js';
import 'zone.js/dist/jasmine-patch.js';
import 'zone.js/dist/async-test.js';
import 'zone.js/dist/fake-async-test.js';

import {TestBed} from '@angular/core/testing';
import {platformServerTesting, ServerTestingModule} from '@angular/platform-server/testing';

import prerenderTests from './app/prerender.spec';
import shellTests from './app/shell.spec';

TestBed.initTestEnvironment(ServerTestingModule, platformServerTesting());

prerenderTests();
shellTests();
