import leetcode.KidsWithTheGreatestNumberOfCandies
import org.scalatest.FunSuite

class KidsWithTheGreatestNumberOfCandiesTest extends FunSuite {
    test("kidsWithCandies") {
        assert(KidsWithTheGreatestNumberOfCandies.kidsWithCandies(Array(2,3,5,1,3), 3) === Array(true,true,true,false,true))
        assert(KidsWithTheGreatestNumberOfCandies.kidsWithCandies(Array(4,2,1,1,2), 1) === Array(true,false,false,false,false))
        assert(KidsWithTheGreatestNumberOfCandies.kidsWithCandies(Array(12,1,12), 10) === Array(true,false,true))
    }
}