echo off
PUSHD "../../../../.."
node --max-old-space-size=2000 --expose-gc "./node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/browser-springnut/definicionbloques-browser-springnut/definicionbloques-instrumentacion-browser-springnut/suite-20-definicionbloques-instrumentacion-tododesdecero-browsertest.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
