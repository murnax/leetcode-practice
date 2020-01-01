import org.scalatest.FunSuite
import leetcode.FizzBuzz

class FizzBuzzTest extends FunSuite {
  test("FizzBuzz") {
    assert(FizzBuzz.fizzBuzz(15) === List[String](
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz"))
  }
}
