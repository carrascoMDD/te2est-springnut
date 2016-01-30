echo off
node --max-old-space-size=8000 --expose-gc "../../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/istdicom/istdicom-query/istdicom-query-php/suite-80-query-php-downloadall-istdicom-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
