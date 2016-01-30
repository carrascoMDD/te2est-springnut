echo off
PUSHD "../../../../.."
node --max-old-space-size=2000 --expose-gc "./node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/browser-springnut/adminoperadores-browser-springnut/adminoperadores-instrumentacion-browser-springnut/suite-32-adminoperadores-instrumentacion-autodesautorizacion-cambiando-browsertest"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
