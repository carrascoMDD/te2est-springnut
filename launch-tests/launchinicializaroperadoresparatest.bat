echo off
node --max-old-space-size=2000 --expose-gc "../node_modules/asyncshell/lib/common-test/launchers/launchtogether.js" "@testspath/springnut/aux-springnut/inicializar-springnut/inicializar-paratest-springnut/suite-11-inicializar-paratest-operadores-crear-springnut-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
