// Problem ID: 5
// URL: https://leetcode.com/problems/longest-palindromic-substring/

package leetcode

object LongestPalindromicSubstring {
  def solution(s: String): String = {
      def longestPalindrome(l: Int, r: Int, result: String): String = {
        if (l + result.length >= s.length) 
          result
        else if (result.length >= r - l + 1 || isPalindrome(l, r))
          longestPalindrome(l + 1, s.length - 1, if (result.length >= r - l + 1) result else s.substring(l, r + 1))
        else
          longestPalindrome(l, r - 1, result)
      }

      def isPalindrome(l: Int, r: Int): Boolean = {
          if (l >= r) true
          else if (s(l) != s(r)) false
          else isPalindrome(l + 1, r - 1)
      }      

      if (s.isEmpty) ""
      else longestPalindrome(0, s.length - 1, s.substring(0, 1))
  }
}
