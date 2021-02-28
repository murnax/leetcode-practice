package leetcode

object MergeStringsAlternately {
    def mergeAlternately(word1: String, word2: String): String =
        word1.zipAll(word2, "", "").map{ case (a, b) => s"$a$b" }.mkString("")
}