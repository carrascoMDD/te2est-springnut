echo off
node --max-old-space-size=2000 --expose-gc "../../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/ine-springnut/validaciones-ine-springnut/suite-42-preparar-criterio-fichero-lanzarfaseficherocriterioyesperarterminacion-iterator-ine-springnut-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
