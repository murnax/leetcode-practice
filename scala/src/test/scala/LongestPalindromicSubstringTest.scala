import org.scalatest.FunSuite
import org.scalatest.prop.TableDrivenPropertyChecks._

import leetcode.LongestPalindromicSubstring

class LongestPalindromicSubstringTest extends FunSuite {
  val testCases = Table(("s", "expected"), ("babad", "bab"), ("cbbd", "bb"))

  testCases.foreach { i =>
    test(s"f(${i._1}) should equal to ${i._2}") {
      assert(LongestPalindromicSubstring.solution(i._1) === i._2)
    }
  }
}
