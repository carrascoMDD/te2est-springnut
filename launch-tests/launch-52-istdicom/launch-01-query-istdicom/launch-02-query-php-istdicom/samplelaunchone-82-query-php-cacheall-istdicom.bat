echo off
node --max-old-space-size=8000 --expose-gc "../../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/istdicom/istdicom-query/istdicom-query-php/suite-82-query-php-cacheall-istdicom-test.json.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
