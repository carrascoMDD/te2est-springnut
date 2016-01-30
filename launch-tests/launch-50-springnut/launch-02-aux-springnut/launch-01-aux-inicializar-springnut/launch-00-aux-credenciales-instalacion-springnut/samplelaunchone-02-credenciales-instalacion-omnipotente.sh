#!/bin/bash

node --max-old-space-size=2000 --expose-gc "../../../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/aux-springnut/inicializar-springnut/credenciales-instalacion-springnut/suite-02-credenciales-instalacion-omnipotente-springnut-test.json"
aRetCode=$?

aColorEscape='\E[47;32m'
if [ $aRetCode -ne 0 ]
then
    aColorEscape='\E[47;31m'
fi
echo -e ',{"exit":'$aColorEscape$aRetCode'\033[0m, "file":"'$aColorEscape'launch-50-springnut launch-02-aux-springnut launch-01-aux-inicializar-springnut launch-00-aux-credenciales-instalacion-springnut  samplelaunchone-02-credenciales-instalacion-omnipotente-perfiles.sh\033[0m"},'
if [ $1 ]
then
    return $aRetCode
else
    exit $aRetCode
fi

