echo off
node --max-old-space-size=2000 --expose-gc "../../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/aux-springnut/bloques-springnut/suite-50-auxbloques-eliminarbloquesdeprueba-ine-springnut-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
