using System;
using System.Collections.Generic;
using System.Text;

namespace Solution
{
    // https://leetcode.com/problems/lru-cache/discuss/126734/C-LinkedList-%2B-Dictionary
    public class LruCache
    {
        private readonly int _capacity;
        private int _count;
        private readonly LinkedList<CacheItem> _items;
        private readonly Dictionary<int, LinkedListNode<CacheItem>> _keys;
        
        public LruCache(int capacity)
        {
            _count = 0;
            _capacity = capacity;
            _items = new LinkedList<CacheItem>();
            _keys = new Dictionary<int, LinkedListNode<CacheItem>>(capacity);
        }

        public int Get(int key)
        {
            if (!_keys.ContainsKey(key)) return -1;

            var cacheItem = _keys[key];
            if (cacheItem != _items.First)
            {
                _items.Remove(cacheItem);
                _items.AddFirst(cacheItem);
            }            
            return cacheItem.Value.Value;
        }

        public void Put(int key, int value)
        {
            if (!_keys.ContainsKey(key))
            {
                _keys[key] = _items.AddFirst(new CacheItem(key, value));

                if (_count == _capacity)
                {
                    var last = _items.Last;
                    _keys.Remove(last.Value.Key);
                    _items.RemoveLast();
                }
                else
                {
                    _count++;
                }
            }
            else
            {
                var cacheItem = _keys[key];
                cacheItem.Value.Value = value;

                if (cacheItem != _items.First)
                {
                    _items.Remove(cacheItem);
                    _items.AddFirst(cacheItem);
                }
            }
        }

        private class CacheItem
        {
            public CacheItem(int key, int value)
            {
                Key = key;
                Value = value;
            }

            public int Key { get; }
            public int Value { get; set; }
        }
    }
}
