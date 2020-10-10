using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Solution
{
    public class ValidPalindrome
    {
        public static bool Solution(string s)
        {
            char[] chars = s.ToLower().ToCharArray().Where(c => char.IsLetterOrDigit(c)).ToArray();
            int l = 0, r = chars.Length - 1;
            while (l < r) 
                if (chars[l++] != chars[r--]) return false;
            return true;
        }

        // https://leetcode.com/problems/valid-palindrome/discuss/771153/C-two-pointer-solution
        public static bool SolutionB(string s)
        {
            int l = 0, r = s.Length - 1;
            while (l < r)
            {
                while (l < r && !char.IsLetterOrDigit(s[l])) l++;
                while (l < r && !char.IsLetterOrDigit(s[r])) r--;
                if (l < r && char.ToLower(s[l++]) != char.ToLower(s[r--])) return false;
            }
            return true;
        }
    }
}
