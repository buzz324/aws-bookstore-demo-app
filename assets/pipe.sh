#! /user/bin/env bash
echo $(node pipeline.js)
if[ $(node pipeline.js)=0 ]; then
    echo 'config not present'
    exit 2

echo 'config check passed!'
#npm install
npm run build #build application
cd src/test
jest #form a test within our test folder
cd ../../../ #go back to main directory
git add . #add new changed file to git repo,staging area
git commit -m $1 #commit with message, $1 is first argument that is passed to the pipeline (to local )
git push origin master
git status