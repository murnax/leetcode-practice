package leetcode

object UniqueOccurrences {
  def uniqueOccurrences(arr: Array[Int]): Boolean = {
    val counter = arr.toList.groupBy(i=>i).mapValues(_.size)
    var map = scala.collection.mutable.Map[Int, Int]()
    for ((_, v) <- counter) {
      if (map.contains(v)) map(v) = map(v) + 1
      else map += (v -> 1)
    }
    map.size == counter.size
  }
}
