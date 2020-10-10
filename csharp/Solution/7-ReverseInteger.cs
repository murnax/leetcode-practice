using System;
using System.Collections.Generic;
using System.Text;

namespace Solution
{
    public class ReverseInteger
    {
        public static int Solution(int n)
        {
            int result = 0, prev = 0;
            while (n != 0)
            {
                result = (result * 10) + (n % 10);
                if ((result - (n % 10)) / 10 != prev) return 0;
                prev = result;
                n /= 10;
            }
            return result;
        }
    }
}
