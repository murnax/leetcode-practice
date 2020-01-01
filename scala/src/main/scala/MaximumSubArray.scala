package leetcode

object MaximumSubArray extends App {
  def maxSubArray(nums: Array[Int]): Int = {
    var result = nums(0)
    var current = nums(0)
    for (i <- 1 to nums.length - 1) {
      current = Math.max(nums(i), current + nums(i))
      if (current > result) result = current
    }
    result
  }
}
