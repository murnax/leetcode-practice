package leetcode

object RunningSumOf1dArray {
    def runningSum(nums: Array[Int]): Array[Int] = {
        nums.scan(0)(_ + _).tail
    }
}
