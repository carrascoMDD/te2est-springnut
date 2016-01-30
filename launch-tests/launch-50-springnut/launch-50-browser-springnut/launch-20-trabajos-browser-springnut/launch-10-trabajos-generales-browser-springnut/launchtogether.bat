echo off
PUSHD "../../../../.."
node --max-old-space-size=2000 --expose-gc "./node_modules/asyncshell/lib/common-test/launchers/launchtogether.js" "@testspath/springnut/browser-springnut/trabajos-browser-springnut/trabajos-generales-browser-springnut/launchables.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
