package leetcode

object ValidParentheses {
  def isValid(s: String): Boolean = {
    def valid(s: List[Char], stack: List[Char]): Boolean =
      (s, stack) match {
        case (Nil, Nil) => true
        case (x::xs, _) if "[{(".contains(x) => valid(xs, x::stack)
        case (x::xs, r::rs) if "]})".indexOf(x) == "[{(".indexOf(r) => valid(xs, rs)
        case _ => false
      }
    valid(s.toList, Nil)
  }
}
