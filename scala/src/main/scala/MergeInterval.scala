package leetcode

import scala.util.chaining._

object MergeInterval extends App {
  def merge(intervals: Array[Array[Int]]): Array[Array[Int]] = {
    // recursion
    def doMerge(x: List[Array[Int]]): List[Array[Int]] = x match {
      case x1::x2::xs if x2(0) <= x1(1) =>
        doMerge(Array(x1(0), x1(1) max x2(1)) :: xs)
      case x1::xs => x1::doMerge(xs)
      case _ => Nil
    }

    // tail recursion
//    def doMerge(x: List[Array[Int]], result: List[Array[Int]]): List[Array[Int]] = x match {
//      case (x1::x2::xs) if x2(0) <= x1(1) =>
//        doMerge(Array(x1(0), x1(1) max x2(1))::xs, result)
//      case (x1::xs) => doMerge(xs, x1::result)
//      case _ => result
//    }

    // foldLeft
//    def doMerge(intervals: List[Array[Int]]): List[Array[Int]] =
//      intervals.sortBy(_(0)).foldLeft(List[Array[Int]]()) {
//        case (r::rs, i) if i(0) <= r(1) =>
//          Array(r(0), i(1) max r(1))::rs
//        case (rs, i) => i::rs
//      }
    doMerge(intervals.sortBy(_(0)).toList).toArray

    // foldLeft - no converting
//    intervals.sortBy(_(0)).foldLeft()


    // https://leetcode.com/problems/merge-intervals/discuss/769892/Scala
//    intervals.sortBy(_(0)) match {
//      case Array(head, tail@_*) => tail
//        .foldLeft(Array[Array[Int]]() -> head) {
//          case (merged, Array(start1, end1)) -> Array(start2, end2) if start1 <= start2 && end2 <= end1 =>
//            merged -> Array(start1, end1 max end2)
//          case (merged, interval1) -> interval2 => (merged :+ interval1, interval2)
//        }
//        .pipe {
//          case (merged, interval) => merged :+ interval
//        }
//      case _ => Array()
//    }
  }
  merge(Array(Array(3, 5), Array(1, 7), Array(5, 9)))
}
