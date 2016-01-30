echo off
node --max-old-space-size=2000 --expose-gc "../../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/springnut/vercambios-springnut/vercambios-auxauditables-springnut/suite-01-vercambios-auxauditables-veridscambiadas-lista-detipoconidentidadentrefechastrasfechahora-springnut-test.json"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
