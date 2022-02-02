#!/bin/bash

SCALA="scala"
JAVASCRIPT="javascript"
CSHARP="csharp"
PYTHON="python"
SUPPORTED_LANGUAGES=($SCALA $JAVASCRIPT $CSHARP $PYTHON)

RED='\033[0;31m'
NC='\033[0m'

validateParameters()
{
    if test -z "$id" 
    then
        echo "${RED}Param id is required${NC}"
        exit 1
    fi

    if test -z "$name"
    then 
        echo "${RED}Param name is required${NC}"
        exit 1
    fi

    leetcodeProblemUrl="https://leetcode.com/problems/$name/"
    response=$(curl --head --write-out %{http_code} --silent --output /dev/null "$leetcodeProblemUrl")
    if [[ $response -ne 200 ]]; then
        echo "${RED}$leetcodeProblemUrl is not a valid Leetcode URL"
        exit 1
    fi
}

createBoilerplate()
{
    echo "Generating boilerplace for problem id: $id, name: $name"
}

toTitleCase() {
    echo "$1" | sed 's/-/ /g' | awk 'BEGIN{split("a the to at in on with and but or",w); for(i in w)nocap[w[i]]}function cap(word){return toupper(substr(word,1,1)) tolower(substr(word,2))}{for(i=1;i<=NF;++i){printf "%s%s",(i==1||i==NF||!(tolower($i) in nocap)?cap($i):tolower($i)),(i==NF?"\n":" ")}}' | sed 's/ //g'
}

while [ $# -gt 0 ]; do
    if [[ $1 == *"--"* ]]; then
        param="${1/--/}"
        declare $param="$2"
    fi
    shift
done

if [[ ${#languages[@]} -eq 0 ]]; then
    echo "'languages' param is not defined, boilerplate code will be generated for all of the following languages: ${SUPPORTED_LANGUAGES[@]}\n"
fi

validateParameters

createBoilerplate

problemName=$(toTitleCase $name)
echo "problem name: $problemName"

exit 0

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