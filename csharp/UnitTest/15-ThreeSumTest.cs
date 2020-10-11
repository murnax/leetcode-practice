using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace UnitTest
{
    public class ThreeSumTest
    {
        [Theory]
        [MemberData(nameof(Data))]
        public void TestMethod(int[] nums, List<List<int>> output)
        {
            new List<List<int>>();
        }

        public static IEnumerable<object[]> Data
        {
            get
            {
                return new List<object[]>()
                {
                    new object[]
                    {
                        new int[]{ -1, 0, 1, 2, -1, -4 },
                        new List<List<int>>
                        {
                            new List<int> { -1, -1, -2 },
                            new List<int> { -1, 0, 1 }
                        }
                    },
                    new object[]
                    {
                        new int[]{},
                        new List<List<int>>{}
                    },
                    new object[]
                    {
                        new int[]{ 0 },
                        new List<List<int>>{}
                    }
                };
            }
        }
    }
}
