## Data structure

### Array

#### Create array of integer
```
val numbers = Array(1, 2, 3, 4, 5)
```

#### Get lenght of array
```
numbers.length // 5
```

#### Access array element by index
```
numbers(2) // 3
```

#### Concat arrays
```
val arrayA = Array(1, 2, 3)
val arrayB = Array(4, 5)
val arrayC = arrayA.concat(arrayB) // Array(1, 2, 3, 4, 5)
```

#### Prepend array
```
val nums = Array(1, 2, 3)
0 +: nums // Array(0, 1, 2, 3)
```

#### Append array
```
val nums = Array(1, 2, 3)
nums :+ 4 // Array(1, 2, 3, 4)
```

#### Loop through all elements in array
```
val numbers = Array(1, 2, 3, 4, 5)
for (i <- numbers) {
    // i is value of each element
}

// or

for (i <- 0 to (numbers.length - 1)) {
    // i is index of each element
}

```

### List

#### Create list of integer
```
val numbers = List(1, 2, 3, 4, 5)

// Create list of integers with cons
val numbers = 1 :: (2 :: (3 :: (4 :: (5 :: Nil))))
```

#### Get length of list
```
numbers.length // 5
```

#### Check if list contains a given value
```
numbers.contains(1) // true
numbers.contains(0) // false
numbers.contains(5) // false
```

#### Get list's head
```
numbers.head // 1
```

#### Get list's tail (every elements except head)
```
numbers.tail // List(2, 3, 4, 5)
```

#### Concat lists
```
val listA = List(1, 2, 3, 4, 5)
val listB = List(6, 7, 8, 9, 10)
val list = listA ::: listB // or
val list = listA.:::listB // or
val list = List.concat(listA, ListB)
```

### Set

```
// Create set of integer
val numbers = Set(1, 1, 2, 2, 3, 4)

// Get size of set
numbers.size // 4

// Check if value if exist in set or not
numbers(1) // true
numbers(0) // false
numbers(5) // false
```

### Map

#### Create map
```
val map = Map(1 -> "a", 2 -> "b", 3 -> "c)
// Map[Int, String](1 -> "a", 2 -> "b", 3 -> "c)
```

#### Add element to map (which returns new map)
```
val map = Map(1 -> "a", 2 -> "b", 3 -> "c")
 map + (4 -> "d")
// Map[Int, String](1 -> "a", 2 -> "b", 3 -> "c)

// mutable map
val map = scala.collection.mutable.Map(1 -> "a", 2 -> "b", 3 -> "c")
map -= 2
// Map[Int, String](1 -> "a", 3 -> "c")
```

## Functional combinators

### map
```
val numbers = List(1, 2, 3, 4, 5)
numbers.map(i => i * 2) // List(2, 4, 6, 8, 10)
numbers.map(_ * 2) // shorthand with same result as above 
```

### forAll
```
val nums = List(3, 6, 9, 12)
nums.forall(_ % 3 == 0) // true
```

### filter
```
val numbers = List(1, 2, 3, 4, 5)
numbers.filter(_ % 2 == 0) // List(2, 4)
```

### count
```
val numbers = List(5, 12, 9, 3, 43)
numbers.count(_ > 10) // <-- 12 and 43
//equivalent to
numbers.filter(_ > 10).size
```

### group
```
val a = (1 to 10).toList
a.grouped(2) // <- List(List(1, 2), List(3, 4), List(5, 6), List(7, 8), List(9, 10))
```

### zip
```
var numbers = List(1, 2, 3, 4)
var chars = List("a", "b", "c", "d")
numbers.zip(chars) // List[(Int, String)]((1, "a"), (2, "b"), (3, "c"), (4, "d"))
```

### zipWithIndex
```
var numbers = List(1, 2, 3, 1)
numbers.zipWithIndex() // List[(Int, Int)]((1, 0), (2, 1), (3, 2), (1, 3))
```

### zipAll
```
val a = List("a", "b", "c", "d")
val b = List(1, 2, 3)
a.zipAll(b, "*", 99) // List((a, 1), (b, 2), (c, 3), (d, 99))
b.zipAll(a, "*", 99) // List((1, a), (2, b), (3, c), (99, d))
```

### partition
```
var numbers = List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
numbers.partition(_ % 2 == 0) // (List[Int], List[Int])(List(2, 4, 6, 8, 10), List(1, 3, 5, 7, 9))
```

## Examples

### Loop through list with index
```
val nums = List(1, 2, 3, 4, 5)
nums.zipWithIndex.map{ 
    case(s, i) => println(s, i)
}
```

### Frequency count
```
val nums = List(1, 2, 3, 1, 1, 3)
nums.groupBy(identity).map{case(k, v) => (k, v.size)} // MapView[Int, Int](1 -> 3, 2 -> 1, 3 -> 2)
// or
nums.groupBy(identity).view.mapValues(_.size) // MapView[Int, Int](1 -> 3, 2 -> 1, 3 -> 2)
```