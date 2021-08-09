package leetcode

class ListNode(_x: Int = 0, _next: ListNode = null) {
    var next: ListNode = _next
    var x: Int = _x
}

object ListNode {
    def apply(x: Int, next: ListNode): ListNode = {
        val n = new ListNode(x)
        n.next = next
        n
    }

    implicit def listNodeToList(x: ListNode): List[Int] = x match {
        case (null) => Nil
        case (n) => n.x :: listNodeToList(n.next)
    }

    implicit def listToListNode(x: List[Int]): ListNode = x match {
        case (Nil) => null
        case (n::tail) => new ListNode(n, listToListNode(tail))
    }
}