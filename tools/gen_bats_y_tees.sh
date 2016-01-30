#!/bin/bash


# ***************************************************************************
#
# Copyright 2014 2015 Antonio Carrasco Valero
# te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org
#
#Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
# {{License2}}
#
# {{Licensed1}}
# {{Licensed2}}
#
# ***************************************************************************


for aFile in ./launch-*.sh
do
    echo "${aFile}"

    aFilename=$(basename "${aFile}")
    echo "${aFilename}"

    aBaseFilename="${aFilename%%.*}"
    echo "${aBaseFilename}"

    cp "${aFile}" "tee-${aBaseFilename}.sh"
    chmod +x "tee-${aBaseFilename}.sh"

    touch "${aBaseFilename}.bat"
    echo "node ${aBaseFilename}.js" > "${aBaseFilename}.bat"

    echo "#!/bin/bash" > "${aFile}"
    echo "node ${aBaseFilename}.js" >> "${aFile}"
done