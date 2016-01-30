echo off
PUSHD "../../../../.."
node --max-old-space-size=2000 --expose-gc "./node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/browser-springnut/edivalidaciones-browser-springnut/edivalidaciones-instrumentacion-browser-springnut/suite-08-edivalidaciones-instrumentacion-parmsspec-candidatesvalidacioncriterio-browsertest.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
