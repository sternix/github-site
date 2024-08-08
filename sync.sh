#!/bin/bash

GH_IO_REPO_DIR=~/proj/sternix.github.io
npm run build
rsync -avz --exclude=.git --delete build/ $GH_IO_REPO_DIR/
cd $GH_IO_REPO_DIR
git add .
git commit -m "updates"
git push
