echo off
node --max-old-space-size=2000 --expose-gc "../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/autentificacion-springnut/suite-35-autentificacion-credencialesexpiradas-pormaxaccesosgracia-forzadoporadministrador-springnut-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
