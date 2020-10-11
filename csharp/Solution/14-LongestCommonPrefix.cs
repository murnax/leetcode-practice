using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Solution
{
    public class LongestCommonPrefix
    {
        public static string Solution(string[] strs)
        {
            return strs.Length > 0 ? strs.Aggregate((prev, next) =>
            {
                var i = 0;
                while (i < prev.Length && i < next.Length && prev[i] == next[i]) i++;
                return prev.Substring(0, i);
            }).ToString() : string.Empty;
        }
    }
}
