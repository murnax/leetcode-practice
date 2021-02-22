package leetcode

object PascalTriangle {
    def generate(numRows: Int): List[List[Int]] = {
        def f(n: Int): List[List[Int]] = {
            if (n == 1) List(List(1))
            else {
                val prev = f(n - 1)
                generateNextRow(prev.head) :: prev
            }
        }

        def generateNextRow(row: List[Int]): List[Int] = {
            (row :+ 0).zip(0 +: row).map(n => n._1 + n._2)
        }

        if (numRows == 0) Nil else f(numRows).reverse
    }
}
