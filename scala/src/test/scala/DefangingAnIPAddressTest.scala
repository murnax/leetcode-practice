import leetcode.DefangingAnIPAddress
import org.scalatest.prop.TableDrivenPropertyChecks._
import org.scalatest.FunSuite

class DefangingAnIPAddressTest extends FunSuite {
  val testCases = Table(
    ("address", "expected"),
    ("1.1.1.1", "1[.]1[.]1[.]1"),
    ("255.100.50.0", "255[.]100[.]50[.]0")
  )

  testCases.foreach { i =>
    test(s"f(${i._1}) should equal to ${i._2}") {
      assert(DefangingAnIPAddress.defangIPaddr(i._1) === i._2)
    }
  }
}
