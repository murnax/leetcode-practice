package leetcode

object ValidParentheses extends App {
  def isValid(s: String): Boolean = {
    def valid(s: List[Char], stack: List[Char]): Boolean =
      (s, stack) match {
        case (Nil, Nil) => true
        case (x::xs, _) if "[{(".contains(x) => valid(xs, x::stack)
        case (x::xs, r::rs) if "]})".contains(x) == "[{(".contains(r) => valid(xs, rs)
        case _ => false
      }
    valid(s.toList, Nil)
  }
}