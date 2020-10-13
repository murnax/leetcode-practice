using System.Collections.Generic;

namespace Solution
{
    public class MinStack
    {
        private readonly LinkedList<int> _vals;
        private readonly LinkedList<int> _minVals;

        public MinStack()
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
}
