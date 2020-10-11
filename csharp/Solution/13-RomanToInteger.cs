using System;

namespace Solution
{
    public class RomanToInteger
    {
        public static int Solution(string s)
        {
            int result = 0;

            for (int i = 0; i < s.Length; i++)
            {
                var c = s[i];
                char next = i < s.Length - 1 ? s[i + 1] : '0';

                if (c == 'I')
                {
                    if (next == 'V')
                    {
                        result += 4;
                        i++;
                    }
                    else if (next == 'X')
                    {
                        result += 9;
                        i++;
                    } else
                    {
                        result += 1;
                    }
                }

                if (c == 'V')
                {
                    result += 5;
                }

                if (c == 'X')
                {
                    if (next == 'L')
                    {
                        result += 40;
                        i++;
                    }
                    else if (next == 'C')
                    {
                        result += 90;
                        i++;
                    }
                    else
                    {
                        result += 10;
                    }
                }

                if (c == 'L')
                {
                    result += 50;
                }

                if (c == 'C')
                {
                    if (next == 'D')
                    {
                        result += 400;
                        i++;
                    }
                    else if(next == 'M')
                    {
                        result += 900;
                        i++;
                    }
                    else
                    {
                        result += 100;
                    }
                }

                if (c == 'D')
                {
                    result += 500;
                }

                if (c == 'M')
                {
                    result += 1000;
                }
            }

            return result;
        }
    }
}
