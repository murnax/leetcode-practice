using System;
using System.Collections.Generic;
using System.Text;

namespace Solution.Utils
{
    public class Trie
    {
        private TrieNode root;

        public Trie()
        {
            root = new TrieNode();
        }

        public void Insert(string word)
        {
            TrieNode curr = root;

            for (int i = 0; i < word.Length; i++)
            {
                int id = word[i] - 'a';
                if (curr.children[id] == null)
                {
                    curr.children[id] = new TrieNode();
                }
                curr = curr.children[id];
            }
        }

        //public bool Search(string word)
        //{

        //}

        //public bool StartsWith(string prefix)
        //{

        //}
    }

    class TrieNode
    {
        public bool IsEnd = false;
        public TrieNode[] children = new TrieNode[26];
    }
}
