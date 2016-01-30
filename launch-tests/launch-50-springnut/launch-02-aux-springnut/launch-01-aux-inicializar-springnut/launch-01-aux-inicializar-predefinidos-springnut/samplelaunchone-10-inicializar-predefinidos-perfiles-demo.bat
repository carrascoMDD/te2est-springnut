echo off
node --max-old-space-size=2000 --expose-gc "../../../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/aux-springnut/inicializar-springnut/inicializar-predefinidos-springnut/suite-10-inicializar-predefinidos-perfiles-springnut-demo.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
