echo off
PUSHD "../../../../.."
node --max-old-space-size=2000 --expose-gc "./node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/browser-springnut/perfilespaginas-browser-springnut/suite-23-perfilespaginas-nograbador-fail-browsertest.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
