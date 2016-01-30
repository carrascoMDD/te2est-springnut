echo off
PUSHD "../../../../.."
node --max-old-space-size=2000 --expose-gc "./node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/browser-springnut/adminoperadores-browser-springnut/adminoperadores-instrumentacion-browser-springnut/suite-31-adminoperadores-instrumentacion-autodesautorizacion-eliminando-browsertest"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
