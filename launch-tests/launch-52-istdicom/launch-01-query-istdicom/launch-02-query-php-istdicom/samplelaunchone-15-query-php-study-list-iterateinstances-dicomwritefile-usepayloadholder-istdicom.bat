echo off
node --max-old-space-size=2000 --expose-gc "../../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/istdicom/istdicom-query/istdicom-query-php/suite-15-query-php-study-list-iterateinstances-dicomwritefile-usepayloadholder-istdicom-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
