package leetcode

object TwoSum {
  def twoSum(nums: Array[Int], target: Int): Array[Int] = {
    var map:Map[Int, Int] = Map()
    for (i <- 0 to nums.length) {
      if (map.contains(target - nums(i))) return Array(map(target - nums(i)), i)
      else map += (nums(i) -> i)
    }
    Array(0, 0)
  }
}
