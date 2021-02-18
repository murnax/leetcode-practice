package leetcode

object TrappingRainWater {
    def trap(height: Array[Int]): Int = {
        height.scan(0)(_ max _).drop(1)
            .zip(height.scanRight(0)(_ max _).dropRight(1))
            .map{ case(a, b) => a min b }.sum - height.sum
    }
}