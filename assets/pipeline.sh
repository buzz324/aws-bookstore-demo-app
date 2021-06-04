
#npm install

npm run build 
cd src/__test__
jest 
cd ../../
git add .
git commit -m $1 
git push origin master
git status