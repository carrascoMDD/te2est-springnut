echo off
PUSHD "../../../../.."
node --max-old-space-size=2000 --expose-gc "./node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/browser-springnut/excepciones-browser-springnut/suite-01-excepciones-simularexcepcion-poroperador-testsinperfiles-browsertest.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
