using System.Collections.Generic;
using Solution;
using Xunit;

public class RunningSumOf1dArrayTest {
    [Theory]
    [MemberData(nameof(Data))]
    public void TestMethod(int[] nums, int[] result)
    {
        Assert.Equal(result, RunningSumOf1dArray.Solution(nums));
    }

    public static IEnumerable<object[]> Data
    {
        get
        {
            return new List<object[]>()
            {
                new object[]
                {
                    new int[]{ 1, 2, 3, 4 },
                    new int[]{ 1, 3, 6, 10 },
                }
            };
        }
    }
}