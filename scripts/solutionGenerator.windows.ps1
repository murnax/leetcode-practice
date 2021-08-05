param ([int] $id, $name)
# Set-Variable -Name "leetCodeProblemUrl" -Value "https://leetcode.com/problems/$name/"
$leetCodeProblemUrl = "https://leetcode.com/problems/$name/"

write-host "Generating template for problem id: $id, name: $name"

$problemName = (Get-Culture).TextInfo.ToTitleCase($name) -replace '[^a-zA-Z0-9]', ''

# Javascript
Copy-Item ".\javascript.solution.template" -Destination ".\$problemName.js"
Copy-Item ".\javascript.test.template" -Destination ".\$problemName.spec.js"
(Get-Content -path ".\$problemName.js") | Foreach-Object {
    $_ -replace '%id%', $id `
       -replace '%url%', $leetCodeProblemUrl `
       -replace '%problemName%', $problemName
} | Set-Content -Path ".\$problemName.js"
((Get-Content -path ".\$problemName.spec.js" -Raw) -replace '%problemName%', $problemName) | Set-Content -Path ".\$problemName.spec.js"
Move-Item -Path ".\$problemName.js" -Destination "..\javascript\src"
Move-Item -Path ".\$problemName.spec.js" -Destination "..\javascript\src"

# Scala
Copy-Item ".\scala.solution.template" -Destination ".\$problemName.scala"
(Get-Content -path ".\$problemName.scala") | Foreach-Object {
    $_ -replace '%id%', $id `
       -replace '%url%', $leetCodeProblemUrl `
       -replace '%problemName%', $problemName
} | Set-Content -Path ".\$problemName.scala"
Copy-Item ".\scala.test.template" -Destination ".\$($problemName)Test.scala"
((Get-Content -path ".\$($problemName)Test.scala" -Raw) -replace '%problemName%', $problemName) | Set-Content -Path ".\$($problemName)Test.scala"
Move-Item -Path ".\$problemName.scala" -Destination "..\scala\src\main\scala"
Move-Item -Path ".\$($problemName)Test.scala" -Destination "..\scala\src\test\scala"

# C#
Copy-Item ".\csharp.solution.template" -Destination ".\$problemName.cs"
(Get-Content -path ".\$problemName.cs") | Foreach-Object {
    $_ -replace '%id%', $id `
       -replace '%url%', $leetCodeProblemUrl `
       -replace '%problemName%', $problemName
} | Set-Content -Path ".\$problemName.cs"
Copy-Item ".\csharp.test.template" -Destination ".\$($problemName)Test.cs"
((Get-Content -path ".\$($problemName)Test.cs" -Raw) -replace '%problemName%', $problemName) | Set-Content -Path ".\$($problemName)Test.cs"
Move-Item -Path ".\$problemName.cs" -Destination "..\csharp\Solution"
Move-Item -Path ".\$($problemName)Test.cs" -Destination "..\csharp\UnitTest"
