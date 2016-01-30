#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/istdicom/istdicom-query/istdicom-query-php/suite-02-query-php-study-instance-istdicom-test.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-52-istdicom launch-01-query-istdicom launch-02-query-php-istdicom samplelaunchone-02-query-php-study-instance-istdicom.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

