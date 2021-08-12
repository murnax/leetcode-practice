import org.scalatest.FunSuite
import org.scalatest.prop.TableDrivenPropertyChecks._

import leetcode.ValidPalindrome

class ValidPalindromeTest extends FunSuite {
  val testCases = Table(
    ("s", "result"),
    ("A man, a plan, a canal: Panama", true),
    ("race a car", false),
    ("0P", false)
  )

  testCases.foreach { i =>
    test(s"f(${i._1}) should equal to ${i._2}") {
      assert(ValidPalindrome.solution(i._1) === i._2)
    }
  }

  testCases.foreach { i =>
    test(s"f2(${i._1}) should equal to ${i._2}") {
      assert(ValidPalindrome.recursiveSolution(i._1) === i._2)
    }
  }
}
