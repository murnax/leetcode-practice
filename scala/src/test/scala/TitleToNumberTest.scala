import org.scalatest.FunSuite
import leetcode.TitleToNumber

class TitleToNumberTest extends FunSuite {
    val input = List(
        ("A", 1),
        ("B", 2),
        ("Z", 26),
        ("AA", 27),
        ("ZY", 701),
        ("FXSHRXW", 2147483647)
    )
    input.foreach{i =>
        test(s"titlteToNumber(${i._1}) should equal ${i._2}") {
            assert(TitleToNumber.titlteToNumber(i._1) === i._2)
        }
    }
}