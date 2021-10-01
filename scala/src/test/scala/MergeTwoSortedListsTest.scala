import org.scalatest.FunSuite
import org.scalatest.prop.TableDrivenPropertyChecks._
import leetcode.{ListNode, MergeTwoSortedLists}

class MergeTwoSortedListsTest extends FunSuite {
  val testCases = Table(
    ("l1", "l2", "expected"),
    (List(1, 2), List(2, 3), List(1, 2, 2, 3)),
    (List(1, 2, 4), List(1, 3, 4), List(1, 1, 2, 3, 4, 4)),
    (List(1, 5, 7), List(9), List(1, 5, 7, 9))
  )

  testCases.foreach { i =>
    test(s"f(${i._1}, ${i._2}) should equal to ${i._3}") {
      assert(MergeTwoSortedLists.solution(i._1, i._2) === i._3)
    }
  }
}
