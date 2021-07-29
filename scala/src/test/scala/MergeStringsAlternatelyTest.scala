import leetcode.MergeStringsAlternately
import org.scalatest.FunSuite

class MergeStringsAlternatelyTest extends FunSuite {
    test("mergeAlternately") {
        assert(MergeStringsAlternately.mergeAlternately("abc", "pqr") == "apbqcr")
        assert(MergeStringsAlternately.mergeAlternately("ab", "pqrs") == "apbqrs")
        assert(MergeStringsAlternately.mergeAlternately("abcd", "pq") == "apbqcd")
    }
}
