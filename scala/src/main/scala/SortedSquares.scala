package leetcode

object SortedSquares extends App {
  def sortedSquares(A: Array[Int]): Array[Int] =
    A.map(n => n * n).sortWith(_ < _)
}
