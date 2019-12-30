package leetcode

object DefangingAnIPAddress {
  def defangIPaddr(address: String): String = {
    address.split('.').mkString("[.]")
  }
}
