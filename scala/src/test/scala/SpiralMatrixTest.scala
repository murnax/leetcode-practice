import org.scalatest.FunSuite
import leetcode.SpiralMatrix
import leetcode.SpiralMatrix2

class SpiralMatrixTest extends FunSuite{
  test("spiralOrder") {
      val matrix = Array(Array(1, 2, 3), Array(4, 5, 6), Array(7, 8, 9))
			val result = List(1, 2, 3, 6, 9, 8, 7, 4, 5)
  	  assert(SpiralMatrix.spiralOrder(matrix) === result)
	    assert(SpiralMatrix2.spiralOrder(matrix) === result)
  }
}
