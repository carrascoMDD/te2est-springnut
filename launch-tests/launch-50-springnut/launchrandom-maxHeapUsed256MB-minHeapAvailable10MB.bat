echo off
node --max-old-space-size=1000 --expose-gc "../../node_modules/asyncshell/lib/common-test/launchers/launchtogether.js" "@testspath/springnut/launchables.json" --random --flat --verboseplan --KKdryrun --repeats=1 --maxHeapUsed=256 --minHeapAvailable=10
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
