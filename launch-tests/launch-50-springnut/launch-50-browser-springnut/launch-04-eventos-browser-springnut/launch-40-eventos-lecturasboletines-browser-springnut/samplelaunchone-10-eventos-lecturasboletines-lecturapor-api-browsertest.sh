#!/bin/bash

pushd "../../../../.."
node --max-old-space-size=2000 --expose-gc "./node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/browser-springnut/eventos-browser-springnut/eventos-lecturasboletines-browser-springnut/suite-10-eventos-lecturasboletines-lecturapor-api-browsertest.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-50-springnut launch-50-browser-springnut launch-04-eventos-browser-springnut launch-40-eventos-lecturasboletines-browser-springnut samplelaunchone-10-eventos-lecturasboletines-lecturapor-api-browsertest.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

