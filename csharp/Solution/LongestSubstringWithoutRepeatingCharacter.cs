using System;
using System.Collections.Generic;
using System.Text;

namespace Solution
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

        // https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/383202/A-simple-hashset-based-O(n)-solution
        public static int SolutionB(string s)
        {
            int i = 0, j = 0, max = 0;
            HashSet<char> set = new HashSet<char>();

            while (i < s.Length)
            {
                if (!set.Contains(s[i]))
                {
                    set.Add(s[i++]);
                    max = Math.Max(max, set.Count);
                }
                else
                {
                    set.Remove(s[j++]);
                }
            }
            return max;
        }
    }
}
