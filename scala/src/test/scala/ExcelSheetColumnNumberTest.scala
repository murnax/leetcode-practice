import org.scalatest.FunSuite
import org.scalatest.prop.TableDrivenPropertyChecks._
import leetcode.ExcelSheetColumnNumber

class ExcelSheetColumnNumberTest extends FunSuite {
    val testCases = Table(
        ("param1", "result"),
        ("A", 1),
        ("B", 2),
        ("Z", 26),
        ("AA", 27),
        ("AB", 28),
        ("ZY", 701),
        ("FXSHRXW", 2147483647)
    )

    testCases.foreach{ i =>
        test(s"f(${i._1}) should equal to ${i._2}") {
            assert(ExcelSheetColumnNumber.solution(i._1) === i._2)
        }
    }
}
