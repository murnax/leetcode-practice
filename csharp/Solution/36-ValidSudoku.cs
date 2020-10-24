using System;
using System.Collections.Generic;

namespace Solution
{
    public class ValidSudoku
    {
        public static bool Solution(char[][] board)
        {
            var rows = new Dictionary<string, bool>();
            for (var i = 0; i < 9; i++)
            {
                for (var j = 0; j < 9; j++)
                {
                    if (board[i][j] != '.')
                    {
                        
                    }
                }
            }
            return true;
        }
    }
}
