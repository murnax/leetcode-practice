import org.scalatest.FunSuite

import leetcode.TwoSum

class TwoSumTest extends FunSuite {
  test("TwoSum") {
    assert(TwoSum.twoSum(Array(2, 7, 11, 15), 9) === Array(0, 1))
  }
}
