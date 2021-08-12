// Problem ID: 125
// URL: https://leetcode.com/problems/valid-palindrome/

package leetcode

object ValidPalindrome {
  def solution(s: String): Boolean = {
    val s2 = s.replaceAll("[^0-9a-zA-Z]", "").toLowerCase()
    var l = 0
    var r = s2.length - 1
    while (l <= r) {
      if (s2(l) != s2(r)) return false
      else {
        l = l + 1
        r = r - 1
      }
    }
    true
  }

  def recursiveSolution(s: String): Boolean = {
    def isPalindrome(s: String, l: Int, r: Int): Boolean = {
      if (l >= r) true
      else if (s(l) != s(r)) false
      else isPalindrome(s, l + 1, r - 1)
    }

    val s2 = s.replaceAll("[^0-9a-zA-Z]", "").toLowerCase()
    isPalindrome(s2, 0, s2.length - 1)
  }
}
