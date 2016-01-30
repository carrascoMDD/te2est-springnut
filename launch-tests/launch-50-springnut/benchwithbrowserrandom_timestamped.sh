#!/bin/bash


benchtimestamp=`date +%Y%m%d%H%M%S`
export benchtimestamp


benchfilename="benchwithbrowserrandom_${benchtimestamp}.txt"
export benchfilename


./launchwithbrowserrandom.sh > "${benchfilename}"


