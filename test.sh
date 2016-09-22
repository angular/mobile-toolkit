#!/bin/bash
cd ./service-worker/worker
gulp test
cd ../../app-shell
gulp test
