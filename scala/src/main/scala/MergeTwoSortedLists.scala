// Problem ID: 21
// URL: https://leetcode.com/problems/merge-two-sorted-lists/

package leetcode

object MergeTwoSortedLists {
  def solution(l1: List[Int], l2: List[Int]): List[Int] = (l1, l2) match {
    case (Nil, Nil)                      => Nil
    case (l1, Nil)                       => l1
    case (Nil, l2)                       => l2
    case (h1 :: t1, h2 :: t2) if h1 < h2 => List(h1) ++ solution(t1, l2)
    case (_, h2 :: t2)                   => List(h2) ++ solution(l1, t2)
  }
}
