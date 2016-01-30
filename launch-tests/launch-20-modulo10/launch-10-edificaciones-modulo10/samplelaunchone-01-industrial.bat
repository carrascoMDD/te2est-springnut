echo off
node --max-old-space-size=2000 --expose-gc "../../../node_modules/asyncshell/lib/common-test/launchers/launchbyname.js" "@testspath/modulo10/edificaciones-modulo10/suite-01-edificaciones-valoracion-industrial-navesdefabricacionyalmacenamiento-modulo10-test"
if ERRORLEVEL 1 (
    POPD
    exit /B %ERRORLEVEL%
)
POPD
