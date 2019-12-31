import org.scalatest.FunSuite
import leetcode.MaximumSubArray

class MaximumSubArrayTest extends FunSuite {
  test("MaximumSubArray") {
    assert(MaximumSubArray.maxSubArray(Array(-2,1,-3,4,-1,2,1,-5,4)) === 6)
  }
}
