echo off
node --max-old-space-size=2000 --expose-gc "../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/importacionficherosascii-springnut/suite-00-importacionficherosascii-crearlanzaryesperarterminaciontrabajo-simularexcepcion-nbol999999999-springnut-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
