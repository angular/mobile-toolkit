#!/bin/bash

set -e -x
cd `dirname $0`

# Download Chrome

PLATFORM="$(uname -s)"
case "$PLATFORM" in
  (Darwin)
    ARCHITECTURE=Mac
    DIST_FILE=chrome-mac.zip
    ;;
  (Linux)
    ARCHITECTURE=Linux_x64
    DIST_FILE=chrome-linux.zip
    ;;
  (*)
    echo Unsupported platform $PLATFORM.  Exiting ... >&2
    exit 3
    ;;
esac

TMP=$(curl -s "https://omahaproxy.appspot.com/all") || true
oldIFS="$IFS"
IFS='
'
IFS=${IFS:0:1}
lines=( $TMP )
IFS=','
for line in "${lines[@]}"
  do
    lineArray=($line);
    if [ "${lineArray[0]}" = "linux" ] && [ "${lineArray[1]}" = "stable" ] ; then
      LATEST_CHROMIUM_VERSION="${lineArray[7]}"
    fi
done
IFS="$oldIFS"

CHROMIUM_DIR=$HOME/.chrome/chromium
CHROMIUM_BIN=$CHROMIUM_DIR/chrome-linux/chrome
CHROMIUM_VERSION_FILE=$CHROMIUM_DIR/VERSION

EXISTING_VERSION=""
if [[ -f $CHROMIUM_VERSION_FILE && -x $CHROMIUM_BIN ]]; then
  EXISTING_VERSION=`cat $CHROMIUM_VERSION_FILE`
  echo Found cached Chromium version: ${EXISTING_VERSION}
fi

if [[ "$EXISTING_VERSION" != "$CHROMIUM_VERSION" ]]; then
  echo Downloading Chromium version: ${CHROMIUM_VERSION}
  rm -fR $CHROMIUM_DIR
  mkdir -p $CHROMIUM_DIR

  NEXT=$CHROMIUM_VERSION
  FILE="chrome-linux.zip"
  STATUS=404
  while [[ $STATUS == 404 && $NEXT -ge 0 ]]
  do
    echo Fetch Chromium version: ${NEXT}
    STATUS=$(curl "https://storage.googleapis.com/chromium-browser-snapshots/${ARCHITECTURE}/${NEXT}/${DIST_FILE}" -s -w %{http_code} --create-dirs -o $FILE) || true
    NEXT=$[$NEXT-1]
  done

  unzip $FILE -d $CHROMIUM_DIR
  rm $FILE
  echo $CHROMIUM_VERSION > $CHROMIUM_VERSION_FILE
fi

if [[ "$CHROMIUM_VERSION" != "$LATEST_CHROMIUM_VERSION" ]]; then
  echo "New version of Chromium available. Update install_chromium.sh with build number: ${LATEST_CHROMIUM_VERSION}"
fi

# Start XVFB

if [[ ${TRAVIS} ]]; then
  sh -e /etc/init.d/xvfb start
fi

# Install npm
pwd
ls

pushd ./service-worker/worker
npm install
./node_modules/.bin/webdriver-manager install --chrome
popd

pushd ./app-shell/
npm install
popd