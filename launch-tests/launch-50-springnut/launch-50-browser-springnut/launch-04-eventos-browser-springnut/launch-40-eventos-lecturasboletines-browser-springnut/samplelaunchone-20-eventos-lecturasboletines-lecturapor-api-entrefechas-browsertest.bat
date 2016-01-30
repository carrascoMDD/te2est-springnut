echo off
PUSHD "../../../../.."
node --max-old-space-size=2000 --expose-gc "./node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/browser-springnut/eventos-browser-springnut/eventos-lecturasboletines-browser-springnut/suite-20-eventos-lecturasboletines-lecturapor-api-entrefechas-browsertest.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
