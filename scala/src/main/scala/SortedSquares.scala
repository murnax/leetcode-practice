package leetcode

object SortedSquares {
  def sortedSquares(A: Array[Int]): Array[Int] = {
    val result = new Array[Int](A.length)
    var n = A.length - 1
    var l = 0
    var r = A.length - 1

    while (l <= r) {
      if (Math.pow(A(l), 2) > Math.pow(A(r), 2)) {
        result(n) = Math.pow(A(l), 2).toInt
        l += 1
      } else {
        result(n) = Math.pow(A(r), 2).toInt
        r -= 1
      }
      n -= 1
    }
    result
  }
}
