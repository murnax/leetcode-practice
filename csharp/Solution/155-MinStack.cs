using System;
using System.Collections.Generic;

namespace Solution
{
    public interface IMinStack
    {
        public void Push(int x);
        public void Pop();
        public int Top();
        public int GetMin();
    }

    public class MinStackWithTwoLinkedLists : IMinStack
    {
        private readonly LinkedList<int> _vals;
        private readonly LinkedList<int> _minVals;

        public MinStackWithTwoLinkedLists()
        {
            _vals = new LinkedList<int>();
            _minVals = new LinkedList<int>();
        }

        public void Push(int x)
        {
            if (_minVals.Count == 0 || x <= _minVals.Last.Value) _minVals.AddLast(x);
            _vals.AddLast(x);
        }

        public void Pop()
        {
            if (Top() == GetMin()) _minVals.RemoveLast();
            _vals.RemoveLast();
        }

        public int Top()
        {
            return _vals.Last.Value;
        }

        public int GetMin()
        {
            return _minVals.Last.Value;
        }
    }

    public class MinStackWithOneStack : IMinStack
    {
        private readonly Stack<(int Value, int Min)> _stack;

        public MinStackWithOneStack()
        {
            _stack = new Stack<(int, int)>();
        }

        public int GetMin()
        {
            return _stack.Peek().Min;
        }

        public void Pop()
        {
            _stack.Pop();
        }

        public void Push(int x)
        {
            if (_stack.Count == 0)
            {
                _stack.Push((x, x));
            }
            else
            {
                _stack.Push((x, Math.Min(x, _stack.Peek().Min)));
            }
        }

        public int Top()
        {
            return _stack.Peek().Value;
        }
    }
}
