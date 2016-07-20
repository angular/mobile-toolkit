#!/bin/bash

cd `dirname $0`
cd ..
pwd

# DISPLAY set to Xvfb for Chrome
export DISPLAY=:99.0
export CHROMIUM_BIN=$CHROMIUM_DIR/chrome-linux/chrome

pushd ./service-worker/worker
gulp test
popd

pushd ./app-shell
./node_modules/.bin/ng test --watch=false
popd
