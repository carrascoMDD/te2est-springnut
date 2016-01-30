#!/bin/bash

# watch tail -n 100 benchbrowser.txt

while true; do  tail -n 100 `ls -1 benchwithbrowserrandom*.txt | tail -1`; sleep 1; done
