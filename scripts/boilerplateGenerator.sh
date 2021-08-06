#!/bin/bash

#getopt -l "help,version:,verbose,rebuild,dryrun" -o "hv:Vrd" -a -- "$@"
# options=$(getopt -l "help,version:,verbose,rebuild,dryrun" -o "hv:Vrd" -a -- "$@")
# printf $options

# getopt "name:,version" "-name=Karthik"

while [ $# -gt 0 ]; do
    if [[ $1 == *"--"* ]]; then
        param="${1/--/}"
        declare $param="$2"        
        # echo "$1 : $2"
    fi
    shift
done

if [[ $id =~ '^[0-9]+$' ]]; then
    echo "Not valid id"
fi

echo $id
echo $name
languages=(${languages//,/ })
echo ${languages[2]}