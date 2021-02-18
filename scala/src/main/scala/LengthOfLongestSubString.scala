package leetcode

object LengthOfLongestSubString {
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

object LengthOfLongestSubString2 {
  def lengthOfLongestSubString(s: String): Int = 
    s.scanLeft("")((s: String, y: Char) => s.substring(1 + s.indexOf(y)) + y).map(_.length).reduce(Math.max)
}
