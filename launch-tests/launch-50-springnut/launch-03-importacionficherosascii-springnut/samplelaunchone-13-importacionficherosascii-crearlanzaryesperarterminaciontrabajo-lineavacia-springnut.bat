echo off
node --max-old-space-size=2000 --expose-gc "../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/importacionficherosascii-springnut/suite-13-importacionficherosascii-crearlanzaryesperarterminaciontrabajo-lineavacia-springnut-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
