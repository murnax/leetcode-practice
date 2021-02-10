import org.scalatest.FunSuite
import leetcode.MergeInterval

class MergeIntervalTest extends FunSuite {
    test("MergeInterval") {
        assert(MergeInterval.merge(
            Array(
                Array[Int](1, 4), 
                Array[Int](4, 5)
            )) === Array(Array(1, 5)))
        
        assert(MergeInterval.merge(
            Array(
                Array[Int](1, 3), 
                Array[Int](2, 6),
                Array[Int](8, 10), 
                Array[Int](15, 18), 
            )) === Array(Array(1, 6), Array(8, 10), Array(15, 18)))
    }        
}