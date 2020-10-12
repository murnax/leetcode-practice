using Solution;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace UnitTest
{
    public class LruCacheTest
    {
        [Theory]
        [MemberData(nameof(Data))]
        public void TestMethod(ILruCache lruCache)
        {
            lruCache.Put(1, 1);
            lruCache.Put(2, 2);
            Assert.Equal(1, lruCache.Get(1));
            lruCache.Put(3, 3);
            Assert.Equal(-1, lruCache.Get(2));
            lruCache.Put(4, 4);
            Assert.Equal(-1, lruCache.Get(1));
            Assert.Equal(3, lruCache.Get(3));
            Assert.Equal(4, lruCache.Get(4));
        }

        public static IEnumerable<object[]> Data
        {
            get
            {
                return new List<object[]>()
                {
                    new object[]
                    {
                        new LruCache(2),
                    },
                    new object[]
                    {
                        new LruCache2(2),
                    }
                };
            }
        }
    }
}
