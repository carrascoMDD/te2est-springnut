#!/bin/bash

node --max-old-space-size=8000 --expose-gc "../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/orthanc/orthanc-rest/suite-72-orthanc-rest-instances-tags-iterate-all-test.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-54-orthanc launch-01-orthanc-rest samplelaunchone-72-orthanc-rest-instances-tags-iterate-all.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

