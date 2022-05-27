NG_BUILD_DIST_PATH="./ekblog-client/dist/ekblog-client"
NG_BUILD_RESOURCE_PATH="./ekblog-server/src/main/resources/ekblog-client"

cd ./ekblog-client/
ng build
cd ..

mkdir $NG_BUILD_RESOURCE_PATH
cp -r $NG_BUILD_DIST_PATH $NG_BUILD_RESOURCE_PATH

mvn package
rm -rf $NG_BUILD_RESOURCE_PATH

