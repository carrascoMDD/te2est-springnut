echo off
node --max-old-space-size=2000 --expose-gc "../../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/aux-springnut/securityproperties-springnut/suite-30-auxasecurityproperties-restablecer-springnut-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
