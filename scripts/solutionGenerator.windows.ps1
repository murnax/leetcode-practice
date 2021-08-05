param ([int] $id, $name)
# Set-Variable -Name "leetCodeProblemUrl" -Value "https://leetcode.com/problems/$name/"
$leetCodeProblemUrl = "https://leetcode.com/problems/$name/"

write-host "Generating template for problem id: $id, name: $name"

$problemName = (Get-Culture).TextInfo.ToTitleCase($name) -replace '[^a-zA-Z0-9]', ''

# Javascript
Copy-Item ".\javascript.solution.template" -Destination ".\$problemName.js"
Copy-Item ".\javascript.test.template" -Destination ".\$problemName.spec.js"
((Get-Content -path ".\$problemName.spec.js" -Raw) -replace '%problemName%', $problemName) | Set-Content -Path ".\$problemName.spec.js"

# Scala
Copy-Item ".\scala.solution.template" -Destination ".\$problemName.scala"
((Get-Content -path ".\$problemName.scala" -Raw) -replace '%problemName%', $problemName) | Set-Content -Path ".\$problemName.scala"
Copy-Item ".\scala.test.template" -Destination ".\$($problemName)Test.scala"
((Get-Content -path ".\$($problemName)Test.scala" -Raw) -replace '%problemName%', $problemName) | Set-Content -Path ".\$($problemName)Test.scala"
