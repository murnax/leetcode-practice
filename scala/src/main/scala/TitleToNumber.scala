package leetcode

object TitleToNumber {
    def titlteToNumber(columnTitle: String): Int = columnTitle.foldLeft(0)((acc, cur) => acc * 26 + (cur - 'A' + 1))
}