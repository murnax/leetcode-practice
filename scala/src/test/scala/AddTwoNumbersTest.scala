import org.scalatest.FunSuite
import org.scalatest.prop.TableDrivenPropertyChecks._
import leetcode.AddTwoNumbers
import leetcode.AddTwoNumbers2
import leetcode.AddTwoNumbers3
import leetcode.ListNode

class AddTwoNumbersTest extends FunSuite {
    val testCases = Table(
        ("l1", "l2", "expected"),
        (List(1, 2), List(3, 4), List(4, 6)),
        (List(2, 4, 3), List(5, 6, 4), List(7, 0, 8)),
        (List(0), List(0), List(0)),
        (List(9, 9, 9, 9, 9, 9, 9), List(9, 9, 9, 9), List(8, 9, 9, 9, 0, 0, 0, 1))
    )

    // AddTwoNumbers
    testCases.foreach{ i =>
        test(s"f(${i._1}, ${i._2}) should equal to ${i._3}") {
            assert(AddTwoNumbers.addTwoNumbers(i._1, i._2) === i._3)
        }
    }

    // AddTwoNumbers2
    testCases.foreach{ i =>
        test(s"f2(${i._1}, ${i._2}) should equal to ${i._3}") {
            assert(AddTwoNumbers2.addTwoNumbers(i._1, i._2) === i._3)
        }
    }

    // AddTwoNumbers3
    testCases.foreach{ i =>
        test(s"f3(${i._1}, ${i._2}) should equal to ${i._3}") {
            assert(AddTwoNumbers3.addTwoNumbers(i._1, i._2) === i._3)
        }
    }
}
