package leetcode

// https://leetcode.com/problems/add-two-numbers/discuss/1056/Scala-solution
object AddTwoNumbers {
    def addTwoNumbers(l1: List[Int], l2: List[Int]): List[Int] = {        
        def f(lists: (List[Int], List[Int]), carry: Int) = lists match {
            case (Nil, Nil) => if (carry == 0) Nil else List(carry)
            case (x::xtail, Nil) => g(x, 0, carry, (xtail, Nil))
            case (Nil, y::ytail) => g(0, y, carry, (Nil, ytail))
            case (x::xtail, y::ytail) => g(x, y, carry, (xtail, ytail))
        }

        def g(x: Int, y: Int, carry: Int, tails: (List[Int], List[Int])): List[Int] = {
            val sum = x + y + carry
            sum % 10 :: f(tails, sum / 10)
        }
        f((l1, l2), 0)
    }
}

// https://leetcode.com/problems/add-two-numbers/discuss/1074/Yet-another-scala-solution
object AddTwoNumbers2 {
    def addTwoNumbers(l1: List[Int], l2: List[Int]): List[Int] = addTwoNumbers(l1, l2, 0)
    
    def addTwoNumbers(l1: List[Int], l2: List[Int], c: Int): List[Int] = (l1, l2, c) match {
        case (Nil, Nil, 0) => Nil
        case (Nil, Nil, _) => List(c)
        case (x::xt, Nil, _) => (x + c) % 10 :: addTwoNumbers(xt, Nil, (x + c) / 10)
        case (Nil, y::yt, _) => (y + c) % 10 :: addTwoNumbers(Nil, yt, (y + c) / 10)
        case (x::xt, y::yt, _) => (x + y + c) % 10 :: addTwoNumbers(xt, yt, (x + y + c) / 10)
    }
}

object AddTwoNumbers3 {
    import ListNode.{listNodeToList, listToListNode}

    def addTwoNumbers(l1: ListNode, l2: ListNode): List[Int] = addTwoNumbers(l1, l2, 0)
    def addTwoNumbers(l1: List[Int], l2: List[Int], c: Int): List[Int] = (l1, l2, c) match {
        case (Nil, Nil, 0) => Nil
        case (Nil, Nil, _) => List(c)
        case (h1::t1, Nil, _) => (h1 + c) % 10 :: addTwoNumbers(t1, Nil, (h1 + c) / 10)
        case (Nil, h2::t2, _) => (h2 + c) % 10 :: addTwoNumbers(Nil, t2, (h2 + c) % 10)
        case (h1::t1, h2::t2, _) => (h1 + h2 + c) % 10 :: addTwoNumbers(t1, t2, (h1 + h2 + c) / 10)
    }
}
