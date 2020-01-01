import org.scalatest.FunSuite

import leetcode.ContainerWithMostWater

class ContainerWithMostWaterTest extends FunSuite {
  test("ContainerWithMostWater") {
    assert(ContainerWithMostWater.maxArea(Array(1,8,6,2,5,4,8,3,7)) === 49)
  }
}
