echo off
node --max-old-space-size=8000 --expose-gc "../../node_modules/asyncshell/lib/common-test/launchers/launchtogether.js" "@testspath/springnut/launchables.json" --random --flat --verboseplan --KKdryrun --repeats=11
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
