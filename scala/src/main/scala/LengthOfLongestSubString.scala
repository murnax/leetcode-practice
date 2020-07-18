package leetcode

object LengthOfLongestSubString extends App {
  def lengthOfLongestSubString(s: String): Int = {
    var max = 0
    var chars = Map[Char, Int]()
    var start = 0
    for (i <- 0 until s.length) {
      if (chars contains s(i)) {
        start = math.max(chars(s(i)) + 1, start)
      }
      chars += (s(i) -> i)
      max = math.max(i - start + 1, max)
    }
    max
  }
}

