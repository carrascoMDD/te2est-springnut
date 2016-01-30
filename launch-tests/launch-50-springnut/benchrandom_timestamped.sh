#!/bin/bash


benchtimestamp=`date +%Y%m%d%H%M%S`
export benchtimestamp


benchfilename="benchrandom_${benchtimestamp}.txt"
export benchfilename


./launchrandom.sh > "${benchfilename}"


