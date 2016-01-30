echo off
PUSHD "../../../../.."
node --max-old-space-size=2000 --expose-gc "./node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/browser-springnut/eventos-browser-springnut/eventos-lecturasboletines-browser-springnut/suite-12-eventos-lecturasboletines-lecturapor-visitapaginacodificacionmanualliterales-browsertest.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
