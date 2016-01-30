echo off
node --max-old-space-size=2000 --expose-gc "../../../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/aux-springnut/inicializar-springnut/credenciales-instalacion-springnut/suite-02-credenciales-instalacion-omnipotente-springnut-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
