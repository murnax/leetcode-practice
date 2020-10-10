package leetcode

import scala.annotation.tailrec

object ContainerWithMostWater extends App {
  def maxArea(height: Array[Int]): Int = {
//    var i = 0
//    var j = height.length - 1
//    var result = Integer.MIN_VALUE
//    while (i < j) {
//      result = math.max(result, Math.min(height(i), height(j)) * (j - i))
//      if (height(i) < height(j)) i += 1
//      else j -= 1
//    }
//    result

    // https://leetcode.com/problems/container-with-most-water/discuss/277213/Scala-solution-with-O(n)-in-time-but-quite-slow
    def calArea(height: List[Int], max: Int): Int = {
      height match {
        case Nil => max
        case _ :: Nil => max
        case head :: tail =>
          if (head < tail.last)
            calArea(tail, Math.max(Math.min(head, tail.last) * tail.length, max))
          else
            calArea(height.slice(0, height.length - 1), Math.max(Math.min(head, tail.last) * tail.length, max))
      }
    }
    calArea(height.toList, 0)
  }
}
