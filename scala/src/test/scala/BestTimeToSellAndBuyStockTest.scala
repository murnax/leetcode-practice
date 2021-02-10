import org.scalatest.FunSuite
import leetcode.BestTimeToSellAndBuyStock

class BestTimeToSellAndBuyStockTest extends FunSuite {
  test("BestTimeToSellAndBuyStock") {
    assert(BestTimeToSellAndBuyStock.maxProfit(Array[Int](7,1,5,3,6,4)) === 5)
    assert(BestTimeToSellAndBuyStock.maxProfit(Array[Int](7,6,4,3,11)) === 8)
  }
}
