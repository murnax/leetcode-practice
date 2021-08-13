// Problem ID: 1929
// URL: https://leetcode.com/problems/concatenation-of-array/

package leetcode

object ConcatenationOfArray {
    def solution(nums: Array[Int]): Array[Int] = {
        val n = nums.length
        val result = new Array[Int](n * 2);
        for (i <- nums.indices) {
          result(i) = nums(i)
          result(i + n) = nums(i)
        }
        result
    }

  def solution2(nums: Array[Int]): Array[Int] = {
      nums ++ nums
  }
}
