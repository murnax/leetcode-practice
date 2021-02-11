import leetcode.DefangingAnIPAddress
import org.scalatest.FunSuite

class DefangingAnIPAddressTest extends FunSuite {
  test("DefangingAnIPAddress") {
    assert(DefangingAnIPAddress.defangIPaddr("1.1.1.1") === "1[.]1[.]1[.]1")
    assert(DefangingAnIPAddress.defangIPaddr("255.100.50.0") === "255[.]100[.]50[.]0")
  }
}
