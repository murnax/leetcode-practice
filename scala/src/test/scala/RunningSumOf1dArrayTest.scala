import org.scalatest.FunSuite

import leetcode.RunningSumOf1dArray

class RunningSumOf1dArrayTest extends FunSuite {
    test("RunningSumOf1dArray") {
        assert(
            RunningSumOf1dArray.runningSum(Array[Int](1, 2, 3, 4)) === Array[Int](1, 3, 6, 10)
        )
    }
}
