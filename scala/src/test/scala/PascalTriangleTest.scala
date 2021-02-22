import org.scalatest.FunSuite
import leetcode.PascalTriangle

class PascalTriangleTest extends FunSuite {
    test("PascalTriangle") {
        assert(PascalTriangle.generate(5) === List(List(1), List(1, 1), List(1, 2, 1), List(1, 3, 3, 1), List(1, 4, 6, 4, 1)))
    }
}