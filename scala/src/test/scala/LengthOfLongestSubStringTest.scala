import org.scalatest.FunSuite
import leetcode.LengthOfLongestSubString
import leetcode.LengthOfLongestSubString2

class LengthOfLongestSubStringTest extends FunSuite {
  test("lengthOfLongestSubString") {
    assert(LengthOfLongestSubString.lengthOfLongestSubString("rithmschool") === 7)
    assert(LengthOfLongestSubString.lengthOfLongestSubString("thisisawesome") === 6)
    assert(LengthOfLongestSubString.lengthOfLongestSubString("thecatinthehat") === 7)

    assert(LengthOfLongestSubString2.lengthOfLongestSubString("rithmschool") === 7)
    assert(LengthOfLongestSubString2.lengthOfLongestSubString("thisisawesome") === 6)
    assert(LengthOfLongestSubString2.lengthOfLongestSubString("thecatinthehat") === 7)
  }
}
