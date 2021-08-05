// Problem ID: 171
// URL: https://leetcode.com/problems/excel-sheet-column-number/

package leetcode

object ExcelSheetColumnNumber {
    def solution(columnTitle: String): Int = columnTitle.foldLeft(0)((acc, cur) => acc * 26 + (cur - 'A' + 1))
}
