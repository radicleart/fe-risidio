#!/bin/bash -e
set -e;

export DEPLOYMENT=$1
PATH_DEPLOY=../radsoc/volumes/www/production/risidio
mkdir -p $PATH_DEPLOY
export SERVER=zeno.brightblock.org
if [ "$DEPLOYMENT" == "prod" ]; then
  SERVER=hume.brightblock.org;
fi

printf "\n-----------------------------------------------------------------------------------------------------\n";
printf "Running script: $0 \n";
printf "Deploying to: $SERVER \n";
printf "\n-----------------------------------------------------------------------------------------------------\n";

function __build() {
  pushd $BUILD_PATH
  npm run build
  popd;
  echo "Initialisation of $BUILD_PATH complete";
}

function __pushcode() {
  printf "\n- deploying from pipeline build \n";
  rsync -aP -e "ssh  -p 7019" $PATH_DEPLOY/* bob@$SERVER:/var/www/risidio
}

BUILD_PATH=./
__build
cp -r ./dist/* $PATH_DEPLOY/.

__pushcode

exit 0;
