package leetcode

object BestTimeToSellAndBuyStock {
  def maxProfit(prices: Array[Int]): Int = {
    var min = Integer.MAX_VALUE
    var max = 0
    for (price <- prices) {
      min = Math.min(price, min)
      max = Math.max(max, price - min)
    }
    max
  }
}