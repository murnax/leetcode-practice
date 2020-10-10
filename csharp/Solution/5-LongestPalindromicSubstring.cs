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
    }
}
