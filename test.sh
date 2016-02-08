#!/bin/bash
cd ./service-worker/worker
gulp build:tests
jasmine
