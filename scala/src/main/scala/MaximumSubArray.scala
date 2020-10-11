package leetcode

object MaximumSubArray extends App {
  // https://leetcode.com/problems/maximum-subarray/discuss/194212/Scala-Solution
  // def maxSubArray(nums: Array[Int]): Int = {
  //   var result = nums(0)
  //   var current = nums(0)
  //   for (i <- 1 to nums.length - 1) {
  //     current = Math.max(nums(i), current + nums(i))
  //     if (current > result) result = current
  //   }
  //   result
  // }

  // https://leetcode.com/problems/maximum-subarray/discuss/165323/Scala-1-line-DP
  def maxSubArray(nums: Array[Int]): Int =
    nums.tail.scan(nums.head){(s, e) => math.max(s+e, e)}.max
}
