#!/bin/bash
cd ./service-worker/worker
gulp test
cd ../../app-shell
./node_modules/.bin/ng test --watch=false

