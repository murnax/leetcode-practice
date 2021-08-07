#!/bin/bash

SCALA="scala"
JAVASCRIPT="javascript"
CSHARP="csharp"
PYTHON="python"
SUPPORTED_LANGUAGES=($SCALA $JAVASCRIPT $CSHARP $PYTHON)

while [ $# -gt 0 ]; do
    if [[ $1 == *"--"* ]]; then
        param="${1/--/}"
        declare $param="$2"
    fi
    shift
done

if [[ ${#languages[@]} -eq 0 ]]; then
    echo "'languages' param is not defined, boilerplate code will be generated for all of the following languages: ${SUPPORTED_LANGUAGES[@]}\n"
    $
fi

echo $id
echo $name
languages=(${languages//,/ })

echo "${#languages[@]}"

leetcodeProblemUrl="https://leetcode.com/problems/$name/"

for language in ${languages[@]}; do
    echo ${language}
done

echo "Generating boilerplace for problem id: $id, name: $name"
# name="$(tr '[:lower:]' '[:upper:]' <<< ${foo:0:1})${foo:1}"
problemName="${name//[^[:alnum:]]/}"

name="${name//[^[:alnum:]]/ }"
name=( $name )
echo "${name[@]}"

for i in ${!name[@]}; do
    first=`echo ${name[$i]}|cut -c1|tr [a-z] [A-Z]`
    second=`echo ${name[$i]}|cut -c2-`
    name[$i]="$first$second"
done

echo ${name[@]}
echo "${name[@]//[^[:alnum:]]/ }"