package leetcode

object CountItemsMatchingRule {
    def countMatches(items: List[List[String]], ruleKey: String, ruleValue: String): Int = items.count(item => {
        ruleKey match {
            case "type" => item(0) == ruleValue
            case "color" => item(1) == ruleValue
            case "name" => item(2) == ruleValue
        }
    })
}
