import org.scalatest.FunSuite

import leetcode.SubtractProductAndSum

class SubtractProductAndSumTest extends FunSuite {
  test("SubtractProductAndSum") {
    assert(SubtractProductAndSum.subtractProductAndSum(234) === 15)
    assert(SubtractProductAndSum.subtractProductAndSum(4421) === 21)
  }
}
