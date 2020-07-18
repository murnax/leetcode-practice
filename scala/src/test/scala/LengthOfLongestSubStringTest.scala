import org.scalatest.FunSuite
import leetcode.LengthOfLongestSubString

class LengthOfLongestSubStringTest extends FunSuite {
  test("lengthOfLongestSubString") {
    assert(LengthOfLongestSubString.lengthOfLongestSubString("rithmschool") === 7)
    assert(LengthOfLongestSubString.lengthOfLongestSubString("thisisawesome") === 6)
    assert(LengthOfLongestSubString.lengthOfLongestSubString("thecatinthehat") === 7)
  }
}
