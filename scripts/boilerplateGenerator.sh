#!/bin/bash

SCALA="scala"
JAVASCRIPT="javascript"
CSHARP="csharp"
PYTHON="python"
SUPPORTED_LANGUAGES=($SCALA $JAVASCRIPT $CSHARP)

RED='\033[0;31m'
NC='\033[0m'

validateParameters()
{
    local id=$1
    local name=$2
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
}

validateLeetcodeUrl() 
{
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

    echo "Creating boilerplate for ${language}..."
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
}

#----------------------------------------------------

while [ $# -gt 0 ]; do
    if [[ $1 == *"--"* ]]; then
        param="${1/--/}"
        declare $param="$2"
    fi
    shift
done

if [[ ${#languages[@]} -eq 0 ]]; then
    echo "'languages' param is not defined, boilerplate code will be generated for all of the following languages: ${SUPPORTED_LANGUAGES[@]}\n"
    languages=${SUPPORTED_LANGUAGES[@]}
fi

validateParameters $id $name

leetcodeProblemUrl="https://leetcode.com/problems/$name/"
validateLeetcodeUrl $leetcodeProblemUrl


problemName=$(toTitleCase $name)
echo "Problem name: ${problemName}\n"

languages=(${languages//,/ })
for language in ${languages[@]}; do
    createBoilerplate $language $id $problemName $leetcodeProblemUrl
done

echo "\nCreated boilerplate successfully"

exit 0
