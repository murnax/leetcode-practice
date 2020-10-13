using System;
using System.Collections.Generic;
using System.Text;

namespace Solution
{
    public class LongestPalindromicSubstring
    {
        public static string Solution(string s)
        {
            var n = s.Length;
            for (var i = n; i > 0; i--)
            {
                for (var j = 0; j <= n - i; j++)
                {
                    var substr = s.Substring(j, i);
                    if (isPalindrome(substr)) return substr;
                }
            }
            return "";
        }

        private static bool isPalindrome(string s)
        {
            int l = 0, r = s.Length - 1;
            while (l < r)
            {
                if (s[l++] != s[r--]) return false;
            }
            return true;
        }

        // Approach A from
        // https://leetcode.com/problems/longest-palindromic-substring/discuss/151144/Bottom-up-DP-Logical-Thinking
        public static string SolutionWithBottomUpDp(string s)
        {
            if (s.Length <= 1) return s;

            int len = s.Length, longestPalindromeStart = 0, longestPalindromeLength = 1;
            bool[,] state = new bool[len, len];

            for (int i = 0; i < len; i++)
            {
                state[i, i] = true;
            }

            for (int i = len - 1; i >= 0; i--)
            {
                for (int dist = 1; dist < len - i; dist++)
                {
                    int j = dist + i;
                    state[i, j] = dist == 1 ? s[i] == s[j] : s[i] == s[j] && state[i + 1, j - 1];
                    if (state[i, j] && j - i + 1 > longestPalindromeLength)
                    {
                        longestPalindromeLength = j - i + 1;
                        longestPalindromeStart = i;
                    }
                }
            }

            return s.Substring(longestPalindromeStart, longestPalindromeStart + longestPalindromeLength);
        }
    }
}
