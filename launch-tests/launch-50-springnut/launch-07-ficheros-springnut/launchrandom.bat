echo off
node --max-old-space-size=2000 --expose-gc "../../../node_modules/asyncshell/lib/common-test/launchers/launchtogether.js" "@testspath/springnut/ficheros-springnut/launchables.json" --random --flat --verboseplan --dryrun --repeats=4
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
