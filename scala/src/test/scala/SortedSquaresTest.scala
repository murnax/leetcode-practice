import org.scalatest.FunSuite

import leetcode.SortedSquares

class SortedSquaresTest extends FunSuite{
  test("SortedSquares") {
    assert(SortedSquares.sortedSquares(Array[Int](-4,-1,0,3,10)) === Array[Int](0,1,9,16,100))
    assert(SortedSquares.sortedSquares(Array[Int](-7,-3,2,3,11)) === Array[Int](4,9,9,49,121))
  }
}
