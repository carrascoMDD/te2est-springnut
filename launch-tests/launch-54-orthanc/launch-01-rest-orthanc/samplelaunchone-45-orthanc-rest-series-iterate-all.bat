echo off
node --max-old-space-size=8000 --expose-gc "../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/orthanc/orthanc-rest/suite-45-orthanc-rest-series-iterate-all-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
