package leetcode

object SubtractProductAndSum {
  def subtractProductAndSum(n: Int): Int = {
    var sum = 0
    var prod = 1
    var m = n
    while (m > 0) {
      sum += m % 10
      prod *= m % 10
      m = m / 10
    }
    prod - sum
  }
}
