import org.scalatest.FunSuite
import leetcode.TrappingRainWater

class TrappingRainWaterTest extends FunSuite {
    test("TrappingRainWater") {
        assert(TrappingRainWater.trap(Array(0,1,0,2,1,0,1,3,2,1,2,1)) == 6)
        assert(TrappingRainWater.trap(Array(4,2,0,3,2,5)) == 9)
    }
}