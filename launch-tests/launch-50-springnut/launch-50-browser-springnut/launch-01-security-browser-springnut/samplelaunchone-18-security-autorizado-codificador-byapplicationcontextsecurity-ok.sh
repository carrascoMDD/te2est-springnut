#!/bin/bash

pushd "../../../.."
node --max-old-space-size=2000 --expose-gc "./node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/browser-springnut/security-browser-springnut/suite-18-security-autorizado-codificador-byapplicationcontextsecurity-ok-browsertest.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-50-springnut launch-50-browser-springnut launch-01-security-browser-springnut samplelaunchone-18-security-autorizado-codificador-byapplicationcontextsecurity-ok-browsertest.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

