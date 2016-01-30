echo off
node --max-old-space-size=2000 --expose-gc "../../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/adminoperadores-springnut/adminoperadores-noautorizado/suite-22-adminoperadores-noautorizado-operador-cambiarcontrasena-poradministrador-springnut-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
