#!/bin/bash
npm config set registry http://registry.npmjs.org/
cd ./service-worker/worker
npm install
cd ../../app-shell
npm install

