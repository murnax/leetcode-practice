import org.scalatest.FunSuite
import leetcode.AddTwoNumbers
import leetcode.AddTwoNumbers2
import leetcode.AddTwoNumbers3
import leetcode.ListNode

class AddTwoNumbersTest extends FunSuite {
    test("AddTwoNumbers") {
        assert(AddTwoNumbers.addTwoNumbers(List(1, 2), List(3, 4)) == List(4, 6))
        assert(AddTwoNumbers.addTwoNumbers(List(2, 4, 3), List(5, 6, 4)) == List(7, 0, 8))
        assert(AddTwoNumbers.addTwoNumbers(List(0), List(0)) == List(0))
        assert(AddTwoNumbers.addTwoNumbers(List(9, 9, 9, 9, 9, 9, 9), List(9, 9, 9, 9)) == List(8, 9, 9, 9, 0, 0, 0, 1))

        assert(AddTwoNumbers2.addTwoNumbers(List(1, 2), List(3, 4)) == List(4, 6))
        assert(AddTwoNumbers2.addTwoNumbers(List(2, 4, 3), List(5, 6, 4)) == List(7, 0, 8))
        assert(AddTwoNumbers2.addTwoNumbers(List(0), List(0)) == List(0))
        assert(AddTwoNumbers2.addTwoNumbers(List(9, 9, 9, 9, 9, 9, 9), List(9, 9, 9, 9)) == List(8, 9, 9, 9, 0, 0, 0, 1))

        assert(AddTwoNumbers3.addTwoNumbers(new ListNode(0), new ListNode(0)) == new ListNode(0))
    }
}
