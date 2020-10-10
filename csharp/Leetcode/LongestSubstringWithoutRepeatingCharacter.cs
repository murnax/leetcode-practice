using System;
using System.Collections.Generic;
using System.Text;

namespace Leetcode
{
    public class LongestSubstringWithoutRepeatingCharacter
    {
        public static int Solution(string s)
        {
            var map = new Dictionary<char, int>();
            var start = 0;
            var end = 0;
            var result = 0;
            while (end < s.Length)
            {
                var c = s[end++];
                if (!map.ContainsKey(c))
                {
                    result = Math.Max(result, end - start);
                    map[c] = 1;
                }
                else
                {
                    ++map[c];
                }    
                
                while (map[c] != 1)
                {
                    var c2 = s[start++];
                    --map[c2];
                    if (map[c2] == 0)
                        map.Remove(c2);
                }
            }
            return result;
        }
    }
}
