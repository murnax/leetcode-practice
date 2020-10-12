using System;
using System.Collections.Generic;
using System.Text;

namespace Solution
{
    public interface ILruCache
    {
        public int Get(int key);
        public void Put(int key, int value);
    }

    public class LruCache : ILruCache
    {
        private readonly int _capacity;
        private int _count;
        private readonly Dictionary<int, Node> _keys;
        private Node _head;
        private Node _tail;

        public LruCache(int capacity)
        {
            _capacity = capacity;
            _count = 0;
            _keys = new Dictionary<int, Node>(capacity);
            _head = new Node(-1, -1);
            _tail = new Node(-1, -1);
            _head.Right = _tail;
            _tail.Left = _head;
        }

        public int Get(int key)
        {
            if (!_keys.ContainsKey(key)) return -1;

            var node = _keys[key];
            RemoveFromList(node);
            PutFront(node);
            return node.Value;
        }

        public void Put(int key, int value)
        {
            Node node = new Node(key, value);
            if (!_keys.ContainsKey(key))
            {
                if (_capacity == _count)
                {
                    _keys.Remove(_tail.Left.Key);
                    RemoveFromList(_tail.Left);
                }
                else
                {
                    _count++;
                }
            }
            else
            {
                RemoveFromList(_keys[key]);
            }
            PutFront(node);
            _keys[key] = node;
        }

        private void RemoveFromList(Node node)
        {
            node.Left.Right = node.Right;
            node.Right.Left = node.Left;
        }

        private void PutFront(Node node)
        {
            node.Right = _head.Right;
            _head.Right.Left = node;
            _head.Right = node;
            node.Left = _head;
        }

        private class Node
        {
            public Node(int key, int value)
            {
                Key = key;
                Value = value;
            }

            public int Key { get; }
            public int Value { get; }
            public Node Left;
            public Node Right;
        }
    }

    // With built-in linked list
    // https://leetcode.com/problems/lru-cache/discuss/126734/C-LinkedList-%2B-Dictionary
    public class LruCache2 : ILruCache
    {
        private readonly int _capacity;
        private int _count;
        private readonly LinkedList<CacheItem> _items;
        private readonly Dictionary<int, LinkedListNode<CacheItem>> _keys;
        
        public LruCache2(int capacity)
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
