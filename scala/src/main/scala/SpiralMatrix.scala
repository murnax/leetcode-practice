package leetcode

object SpiralMatrix {
    def spiralOrder(matrix: Array[Array[Int]]): List[Int] = {
        // https://leetcode.com/problems/spiral-matrix/discuss/389896/Scala-Solution-with-detailed-explanations
        def snail(xs: List[List[Int]]): List[Int] = xs match {
            case Nil => Nil
            case x :: xs => x ++ snail(xs.transpose.reverse)
        }
        snail(matrix.toList.map(_.toList))
    }
}

object SpiralMatrix2 {
    def spiralOrder(matrix: Array[Array[Int]]): List[Int] = spiralOrder(matrix.toList.map(_.toList), List.empty)
    def spiralOrder(matrix: List[List[Int]], result: List[Int]): List[Int] = matrix match {
        case Nil => result
        case _ => spiralOrder(matrix.drop(1).transpose.reverse, result ::: matrix(0))
    }
}
