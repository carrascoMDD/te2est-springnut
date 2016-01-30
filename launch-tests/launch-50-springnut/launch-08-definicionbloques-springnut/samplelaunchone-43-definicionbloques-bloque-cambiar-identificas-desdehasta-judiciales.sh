#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/definicionbloques-springnut/suite-43-definicionbloques-bloque-judiciales-cambiar-identificas-desdehasta-springnut-test.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-50-springnut launch-08-definicionbloques-springnut samplelaunchone-43-definicionbloques-bloque-cambiar-identificas-desdehasta-judiciales.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi
