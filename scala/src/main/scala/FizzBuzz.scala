package leetcode

object FizzBuzz {
  def fizzBuzz(n: Int): List[String] = {
    Range(1, n + 1)
      .map(num => {
        (num % 3 == 0, num % 5 == 0) match {
          case (true, true) => "FizzBuzz"
          case (true, _) => "Fizz"
          case (_, true) => "Buzz"
          case (_, _) => num.toString
        }
      }).toList
  }
}
