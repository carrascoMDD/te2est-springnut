echo off
node --max-old-space-size=2000 --expose-gc "../../../../../node_modules/asyncshell/lib/common-test/launchers/launchtogether.js" "@testspath/springnut/aux-springnut/eliminacionficheros-springnut/eliminacionficheros-muchos/launchables-eliminarmuchosnodeprueba.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
