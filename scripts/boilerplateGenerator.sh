#!/bin/bash

SCALA="scala"
JAVASCRIPT="javascript"
CSHARP="csharp"
PYTHON="python"
SUPPORTED_LANGUAGES=($SCALA $JAVASCRIPT $CSHARP)

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLLOW='\033[1;33m'
NC='\033[0m'

validateParameters()
{
    local id=$1
    local name=$2
    if test -z "$id" 
    then
        echo "${RED}Param id is required${NC}"
        showExample
        exit 1
    fi

    if test -z "$name"
    then 
        echo "${RED}Param name is required${NC}"
        showExample
        exit 1
    fi
}

validateLeetcodeUrl() 
{
    echo "\nValidating Leetcode URL..."
    response=$(curl --head --write-out %{http_code} --silent --output /dev/null "$1")
    if [[ $response -ne 200 ]]; then
        echo "${RED}$leetcodeProblemUrl is not a valid Leetcode URL"
        exit 1
    fi
}

toTitleCase() {
    echo "$1" | sed 's/-/ /g' | awk 'BEGIN{split("a the to at in on with and but or",w); for(i in w)nocap[w[i]]}function cap(word){return toupper(substr(word,1,1)) tolower(substr(word,2))}{for(i=1;i<=NF;++i){printf "%s%s",(i==1||i==NF||!(tolower($i) in nocap)?cap($i):tolower($i)),(i==NF?"\n":" ")}}' | sed 's/ //g'
}

createBoilerplate() {
    local language=$1
    local id=$2
    local problemName=$3
    local url=$4

    echo "\nCreating boilerplate for ${language}..."
    replacePattern="s,%id%,${id},g; s,%problemName%,${problemName},g; s,%url%,${url},g;"
    case $language in
        $SCALA)
            cat ./scala.solution.template | sed "$replacePattern" > ../scala/src/main/scala/$problemName.scala
            cat ./scala.test.template | sed "$replacePattern" > ../scala/src/test/scala/${problemName}Test.scala
            ;;
        $JAVASCRIPT)
            cat ./javascript.solution.template | sed "$replacePattern" > ../javascript/src/$problemName.scala
            cat ./javascript.test.template | sed "$replacePattern" > ../javascript/src/${problemName}Test.scala
            ;;
        $CSHARP)
            cat ./csharp.solution.template | sed "$replacePattern" > ../csharp/Solution/$problemName.scala
            cat ./csharp.test.template | sed "$replacePattern" > ../csharp/UnitTest/${problemName}Test.scala
            ;;

        # TODO: create python boilerplate
        # $PYTHON)
        #     cat ./python.solution.template | sed "$replacePattern" > ../python/$problemName.scala
        #     cat ./python.test.template | sed "$replacePattern" > ../python/${problemName}Test.scala
        #     ;;

        *)
            echo "${RED}$language is not supported."
            exit 1
            ;;
    esac    
    echo "${GREEN}--- Boilerplate files have been creatd for $language${NC}"
}

showExample() 
{
    echo "--- Example: sh boilerplateGenerator.sh --id 5 --name longest-palindromic-substring --languages javascriptsss"
}

#----------------------------------------------------

while [ $# -gt 0 ]; do
    if [[ $1 == *"--"* ]]; then
        param="${1/--/}"
        declare $param="$2"
    fi
    shift
done

validateParameters $id $name

if [[ ${#languages[@]} -eq 0 ]]; then
    echo "${YELLLOW}'languages' param is not defined, boilerplate code will be generated for all of the following languages: ${SUPPORTED_LANGUAGES[@]}${NC}"
    read -p "(Confirm) Y or N " -n 1 -r
    if ! [[ $REPLY =~ ^[Yy]$ ]]
    then
        exit 0
    fi
    echo ""
    languages=${SUPPORTED_LANGUAGES[@]}
fi


leetcodeProblemUrl="https://leetcode.com/problems/$name/"
validateLeetcodeUrl $leetcodeProblemUrl

problemName=$(toTitleCase $name)
echo "\nProblem name: ${problemName}"

languages=(${languages//,/ })
for language in ${languages[@]}; do
    createBoilerplate $language $id $problemName $leetcodeProblemUrl
done

echo "\n${GREEN}Created boilerplate successfully${NC}"

exit 0
