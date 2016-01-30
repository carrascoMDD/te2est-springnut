echo off
PUSHD "../../../../.."
node --max-old-space-size=2000 --expose-gc "./node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/browser-springnut/edivalidaciones-browser-springnut/edivalidaciones-instrumentacion-browser-springnut/suite-01-edivalidaciones-instrumentacion-inlineconf-18-browsertest.json"
if ERRORLEVEL 1 (
    POPD
    POPD
    exit /B %ERRORLEVEL%
)
POPD
POPD
