#!/bin/bash
node --max-old-space-size=8000 --expose-gc "../../node_modules/asyncshell/lib/common-test/launchers/launchtogether.js" "@testspath/springnut/launchables-jsonapi-x6-and-browser.json" --random --flat --KKverboseplan --KKdryrun --repeats=100
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-50-springnut launchtogether.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

