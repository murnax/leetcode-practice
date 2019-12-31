package leetcode

object ContainerWithMostWater extends App {
  def maxArea(height: Array[Int]): Int = {
    var i = 0
    var j = height.length - 1
    var result = Integer.MIN_VALUE
    while (i < j) {
      result = Math.max(result, Math.min(height(i), height(j)) * (j - i))
      if (height(i) < height(j)) i += 1
      else j -= 1
    }
    result
  }
}
