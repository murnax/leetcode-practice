import org.scalatest.FunSuite

import leetcode.UniqueOccurrences

class UniqueOccurrencesTest extends FunSuite {
  test("UniqueOccurrences") {
    assert(UniqueOccurrences.uniqueOccurrences(Array[Int](1,2,2,1,1,3)) === true)
    assert(UniqueOccurrences.uniqueOccurrences(Array[Int](1,2)) === false)
    assert(UniqueOccurrences.uniqueOccurrences(Array[Int](-3,0,1,-3,1,1,1,-3,10,0)) === true)
  }
}
