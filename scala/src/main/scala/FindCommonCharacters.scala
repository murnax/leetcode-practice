package leetcode
import scala.collection.mutable.{ListBuffer, Map}

object FindCommonCharacters extends App {
//  def solution(A: Array[String]): List[String] = {
//    var maps = A.map(word => {
//      var map = Map[Char, Int]()
//      for (c <- word) {
//        if (map contains c) map(c) = map(c) + 1
//        else map += (c -> 1)
//      }
//      map
//    })
//
//  }
  var result = ListBuffer[String]()
val A = Array[String]("bella", "label", "roller")
  var maps = A.map(word => {
    var map = Map[Char, Int]()
    for (c <- word) {
      if (map contains c) map(c) = map(c) + 1
      else map += (c -> 1)
    }
    map
  })
  for ((c, i) <- maps(0)) {
    println(c, i)
    var min = Integer.MAX_VALUE
    val hasKey = maps.forall(map => {
      min = Math.min(min, map(c))
      map(c) > 0
    })
    if (hasKey)
      result += "l"
  }
  result.toList
}


