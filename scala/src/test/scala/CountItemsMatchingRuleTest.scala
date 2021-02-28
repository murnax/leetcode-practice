import leetcode.CountItemsMatchingRule
import org.scalatest.FunSuite

class CountItemsMatchingRuleTest extends FunSuite {
    test("countMatches") {
        assert(CountItemsMatchingRule.countMatches(List(
            List("phone","blue","pixel"),
            List("computer","silver","lenovo")
        ), "color", "silver") == 1)

        assert(CountItemsMatchingRule.countMatches(List(
            List("phone","blue","pixel"),
            List("computer","silver","lenovo"),
            List("phone","gold","iphone")
        ), "type", "phone") == 2)
    }
}
