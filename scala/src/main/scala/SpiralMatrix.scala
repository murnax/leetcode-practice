package leetcode

object SpiralMatrix extends App {
    def spiralOrder(matrix: Array[Array[Int]]): List[Int] = {
        // https://leetcode.com/problems/spiral-matrix/discuss/389896/Scala-Solution-with-detailed-explanations
        def snail(xs: List[List[Int]]): List[Int] = xs match {
            case Nil => Nil
            case x :: xs => x ++ snail(xs.transpose.reverse)
        }
        snail(matrix.toList.map(_.toList))
    }
}