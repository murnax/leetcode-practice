import leetcode.ValidParentheses
import org.scalatest.FunSuite

class ValidParenthesesTest extends FunSuite {
    test("ValidParentheses") {
        assert(ValidParentheses.isValid("()") === true)
        assert(ValidParentheses.isValid("()[]{}") === true)
        assert(ValidParentheses.isValid("(]") === false)
        assert(ValidParentheses.isValid("([)]") === false)
        assert(ValidParentheses.isValid("([])") === true)
    }
}
