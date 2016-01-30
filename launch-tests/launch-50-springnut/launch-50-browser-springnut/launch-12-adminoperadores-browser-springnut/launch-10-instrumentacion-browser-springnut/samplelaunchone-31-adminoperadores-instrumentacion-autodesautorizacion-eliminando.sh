#!/bin/bash

pushd "../../../../.."
node --max-old-space-size=2000 --expose-gc "./node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/browser-springnut/adminoperadores-browser-springnut/adminoperadores-instrumentacion-browser-springnut/suite-31-adminoperadores-instrumentacion-autodesautorizacion-eliminando-browsertest"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-50-springnut launch-50-browser-springnut launch-12-adminoperadores-browser-springnut launch-10-adminoperadores-instrumentacion-browser-springnut samplelaunchone-31-adminoperadores-instrumentacion-autodesautorizacion-eliminando.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

