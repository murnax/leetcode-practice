// Problem ID: 5
// URL: https://leetcode.com/problems/longest-palindromic-substring/

package leetcode

object LongestPalindromicSubstring {
  def solution(s: String): Unit = {


      def isPalindrome(s: String, l: Int, r: Int): Boolean = {
          if (l >= r) true
          else if (s(l) != s(r)) false
          else isPalindrome(s, l + 1, r - 1)
      }
  }
}
