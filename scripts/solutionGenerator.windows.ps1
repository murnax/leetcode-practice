Param ([int] $id, $name, [String[]] $languages)

$SCALA = "scala"
$JAVASCRIPT = "javascript"
$CSHARP = "csharp"
$SUPPORTED_LANGUAGES = @($SCALA, $JAVASCRIPT, $CSHARP)

Function Create-Boilerplate{
    Param ($language)
    write-host "Creating boilerplate for $language"
    switch ($language) {        
        $JAVASCRIPT {
            Copy-Item ".\javascript.solution.template" -Destination ".\$problemName.js"
            Copy-Item ".\javascript.test.template" -Destination ".\$problemName.spec.js"
            Replace-Placeholder ".\$problemName.js"
            Replace-Placeholder ".\$problemName.spec.js"
            Move-Item -Path ".\$problemName.js" -Destination "..\javascript\src"
            Move-Item -Path ".\$problemName.spec.js" -Destination "..\javascript\src"
        }
        $CSHARP {
            Copy-Item ".\csharp.solution.template" -Destination ".\$problemName.cs"            
            Copy-Item ".\csharp.test.template" -Destination ".\$($problemName)Test.cs"            
            Replace-Placeholder ".\$problemName.cs"
            Replace-Placeholder ".\$($problemName)Test.cs"
            Move-Item -Path ".\$problemName.cs" -Destination "..\csharp\Solution"
            Move-Item -Path ".\$($problemName)Test.cs" -Destination "..\csharp\UnitTest"
        }
        $SCALA {
            Copy-Item ".\scala.solution.template" -Destination ".\$problemName.scala"            
            Copy-Item ".\scala.test.template" -Destination ".\$($problemName)Test.scala"
            Replace-Placeholder ".\$problemName.scala"
            Replace-Placeholder ".\$($problemName)Test.scala"            
            Move-Item -Path ".\$problemName.scala" -Destination "..\scala\src\main\scala"
            Move-Item -Path ".\$($problemName)Test.scala" -Destination "..\scala\src\test\scala"
        }
    }
}

Function Replace-Placeholder{
    Param ($filePath)
    (Get-Content -Path $filePath) | Foreach-Object {
        $_ -replace '%id%', $id `
            -replace '%url%', $leetCodeProblemUrl `
            -replace '%problemName%', $problemName
    } | Set-Content -Path $filePath
}

function Check-UrlValidity($_URL) {
    write-host "Validating if $_URL is accessible on Leetcode"
    try {        
        $request= [System.Net.WebRequest]::Create($_URL)
        $response = $request.getResponse()
        if ($response.StatusCode -eq "200") {
            write-host "$_URL is a valid URL on Leetcode`n" -ForegroundColor green 
        } else {
            write-host "Site - $_URL is down `n" ` -ForegroundColor red
        }
    } catch {
        write-host "$_URL is not a valid URL on Leetcode or not accessible.`n" ` -ForegroundColor red
        exit 1
    }
}

# -----------------------------------------------------------

$leetCodeProblemUrl = "https://leetcode.com/problems/$name/"

if ( $languages.Length -eq 0 ) {
    write-host "'language' param is not defined, boilerplate code will be generated for all of the following languages: $SUPPORTED_LANGUAGES`n" -ForegroundColor yellow
    $languages = $SUPPORTED_LANGUAGES
}

Check-UrlValidity $leetCodeProblemUrl

write-host "Generating template for problem id: $id, name: $name"

$problemName = (Get-Culture).TextInfo.ToTitleCase($name) -replace '[^a-zA-Z0-9]', ''

if ( $languages.Contains($JAVASCRIPT)) {
    Create-Boilerplate $JAVASCRIPT
}

if ( $languages.Contains($CSHARP)) {
    Create-Boilerplate $CSHARP
}

if ( $languages.Contains($SCALA)) {
    Create-Boilerplate $SCALA
}