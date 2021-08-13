import org.scalatest.FunSuite
import org.scalatest.prop.TableDrivenPropertyChecks._

import leetcode.ConcatenationOfArray

class ConcatenationOfArrayTest extends FunSuite {
    val testCases = Table(
        ("nums", "expected"),
        (Array[Int](1, 2, 1), Array[Int](1, 2, 1, 1, 2, 1)),
        (Array[Int](1,3,2,1), Array[Int](1,3,2,1,1,3,2,1))
    )

    testCases.foreach{ i =>
        test(s"f(${i._1}) should equal to ${i._2}") {
            assert(ConcatenationOfArray.solution(i._1) === i._2)
        }
    }

    testCases.foreach{ i =>
        test(s"f2(${i._1}) should equal to ${i._2}") {
            assert(ConcatenationOfArray.solution2(i._1) === i._2)
        }
    }
}
