echo off
node --max-old-space-size=2000 --expose-gc "../node_modules/asyncshell/lib/common-test/launchers/launchmodules.js" "#root/tests/alllaunchables.json"
if ERRORLEVEL 1 (
    exit /B %ERRORLEVEL%
)
