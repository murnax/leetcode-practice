package leetcode

object ValidSudoku {
    def isValidSudoku(board: Array[Array[Char]]): Boolean = {
        val rowsValid = board.forall(hasNoDuplicates)
        val columnsValid = board.transpose.forall(hasNoDuplicates)
        rowsValid && columnsValid && squaresNoDuplicates(board)
    }

    def hasNoDuplicates(line: Array[Char]): Boolean = line.distinct.count('1' to '9' contains(_)) == line.count(_ != '.')

    private def squaresNoDuplicates(board: Array[Array[Char]]): Boolean = {
        board.grouped(3)
            .map(_.transpose)
            .map(_.grouped(3))
            .map(_.map(_.flatten))
            .forall(_.forall(hasNoDuplicates))
    }
}
