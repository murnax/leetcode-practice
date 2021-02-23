## Basic syntax

### Declaration

#### Variable
```
var languageName = "Scala"
```

#### Value
```
val languageName = "Scala"
```

#### function
```
def getLanguageName(): String = {
    "Scala"
}

// function with parameter
def greeting(name: String): String = {
    s"Hello, $name"
}

// function without return type
def greeting(name: String): Unit = {
    println(s"Hello, $name")
}
```