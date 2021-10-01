import scala.annotation.tailrec
import scala.reflect.ClassTag
import scala.util.Random
// Practice problem from http://aperiodic.net/phil/scala/s-99/

val listA = List(1, 2, 3, 4, 5, 6)
val listAbc = List('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k')
val listPeople = List("Aldo", "Beat", "Carla", "David", "Evi", "Flip", "Gary", "Hugo", "Ida")

// P01
def lastBuiltIn[T](list: List[T]): T = list.last

def lastRecursive[T](list: List[T]): T = list match {
  case h :: Nil => h
  case _ :: t => lastRecursive(t)
  case _ => throw new NoSuchElementException
}


// P02
def penultimateBuiltin[T](list: List[T]): T =
  if (list.isEmpty) throw new NoSuchElementException
  else list.init.last
penultimateBuiltin(List(1, 2, 3, 4, 5))

def penultimateRecursive[T](list: List[T]): T = list match {
  case h :: _ :: Nil => h
  case _ :: t => penultimateRecursive(t)
  case _ => throw new NoSuchElementException
}
penultimateRecursive(List(1, 2, 3, 4, 5))


// P03
def nthBuiltin[T](k: Int, list: List[T]): T =
  if (k >= 0) list(k)
  else throw new NoSuchElementException

def nthRecursive[T](k: Int, list: List[T]): T = (k, list) match {
  case (0, h :: _) => h
  case (n, h :: t) => nthRecursive(n - 1, t)
  case (_, Nil) => throw new NoSuchElementException
}


// P04
def lengthBuiltIn[T](list: List[T]): Int = list.length

def lengthRecursive[T](list: List[T]): Int = list match {
  case Nil => 0
  case _ :: t => 1 + lengthRecursive(t)
}

def lengthFunctional[T](list: List[T]): Int = list.foldLeft(0) { (c, _) => c + 1 }


// P05
def reverseBuiltin[T](list: List[T]): List[T] = list.reverse
def reverseRecursive[T](list: List[T]): List[T] = list match {
  case Nil => Nil
  case h :: t => reverseRecursive(t) ++ List(h) // listA ::: listB also work
}
def reverseTailRecursion[T](list: List[T]): List[T] = {
  def reverseR(result: List[T], curList: List[T]): List[T] = curList match {
    case Nil => result
    case h :: t => reverseR(h :: result, t)
  }
  reverseR(List.empty, list)
}
def reversePureFunction[T](list: List[T]): List[T] =
  list.foldLeft(List[T]()) { (c, n) => n :: c}
reverseBuiltin(listA)
reverseRecursive(listA)
reverseTailRecursion(listA)
reversePureFunction(listA)


// P06
def isPalindrome[T](list: List[T]): Boolean = list == list.reverse
isPalindrome(List(1, 2, 3, 2, 1))


// P07
def flatten(list: List[Any]): List[Any] = list.flatMap {
  case ms: List[_] => flatten(ms)
  case e => List(e)
}
flatten(List(1, 2, List(3, 4, 5, List(5.1, 5.2)), 6, 7, List(8, 9)))


// P08
val uncompressedList = List(1, 1, 1, 2, 2, 3, 4, 4, 4)
//def compressRecursive[T](list: List[T]): List[T] = list match {
//  case Nil => Nil
//  case h :: t if h !== t.head => h :: compressRecursive(t)
//  case h :: t if h == t.head => compressRecursive(t)
//}
def compressRecursive[T](list: List[T]): List[T] = list match {
  case Nil => Nil
  case h :: t => h :: compressRecursive(t.dropWhile(_ == h))
}
def compressFunctional[T](list: List[T]): List[T] =
  list.foldLeft(List[T]()){ (c, n) => if (!c.isEmpty && c.last == n) c else c :+ n }
compressRecursive(uncompressedList)
compressFunctional(uncompressedList)


// P09
def packTailRecursion[T](list: List[T]): List[List[T]] = {
  def _pack(res: List[List[T]], remain: List[T]): List[List[T]] = remain match {
    case Nil => res
    case h :: t if res.isEmpty || res.last.head != h => _pack(res ::: List(List(h)), t)
    case h :: t => _pack(res.init ::: List(res.last ::: List(h)), t)
  }
  _pack(List(), list)
}
def packWithSpan[T](list: List[T]): List[List[T]] = {
  def _pack(res: List[List[T]], remain: List[T]): List[List[T]] = remain match {
    case Nil => res
    case ls => {
      val (l: List[T], r: List[T]) = ls.span { _ == ls.head }
      _pack(res:::List(l), r)
    }
  }
  _pack(List(), list)
}
packTailRecursion(uncompressedList)
packWithSpan(uncompressedList)


// P10
def encode[T](list: List[T]): List[(Int, T)] =
  packTailRecursion(list).map { e => (e.length, e.head) }
encode(uncompressedList)


// P11
def encodeModified[T](list: List[T]): List[Any] =
  encode(list).map { e => if (e._1 > 1) e else e._2 }
encodeModified(uncompressedList)

def encodeModified2[T](list: List[T]): List[Either[T, (Int, T)]] =
  encode(list) map { e => if (e._1 == 1) Left(e._2) else Right(e) }
encodeModified2(uncompressedList)


// P12
def decode[T](list: List[(Int, T)]): List[T] =
  list.flatMap { e => List.fill(e._1)(e._2)}
decode(encode(uncompressedList))


// P13
def encodeDirect[T](list: List[T]): List[(Int, T)] = {
  def _pack(res: List[(Int, T)], remain: List[T]): List[(Int, T)] = remain match {
    case Nil => res
    case h :: t if res.isEmpty || res.last._2 != h => _pack(res ::: List((1, h)), t)
    case _ :: t => _pack(res.init ::: List((res.last._1 + 1, res.last._2)), t)
  }
  _pack(List(), list)
}
encodeDirect(uncompressedList)

def encodeDirectWithSpan[T](list: List[T]): List[(Int, T)] = {
  if (list.isEmpty) Nil
  else {
    val (packed, next) = list.span { _ == list.head }
    (packed.length, packed.head) :: encodeDirectWithSpan(next)
  }
}
encodeDirectWithSpan(uncompressedList)


// P14
def duplicate[T](list: List[T]): List[T] =
  list.flatMap { e => List.fill(2)(e) } // or { e => List(e, e) }
duplicate(List('a', 'b', 'c', 'c', 'd'))


// P15
def duplicateNTime[T](n: Int, list: List[T]): List[T] =
  list.flatMap { e => List.fill(n)(e) }
duplicateNTime(3, List('a', 'b', 'c', 'c', 'd'))


// P16
def dropFunctional[T](n: Int, list: List[T]): List[T] =
  list.zipWithIndex filter { e => (e._2 + 1) % n != 0 } map { _._1 }
dropFunctional(3, List('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'))


// P17
def split[T](n: Int, list: List[T]): (List[T], List[T]) = {
  val (l, r) = list.zipWithIndex.span { _._2 < n }
  (l.map(_._1), r.map(_._1))
}
def splitBuiltIn[T](n: Int, list: List[T]): (List[T], List[T]) = list.splitAt(n)
def splitBuiltIn2[T](n: Int, list: List[T]): (List[T], List[T]) = (list.take(n), list.drop(n))
def splitRecursive[T](n: Int, list: List[T]): (List[T], List[T]) = (n, list) match {
  case (_, Nil) => (Nil, Nil)
  case (0, list) => (Nil, list)
  case (n, h :: t) => {
    val (left, right) = splitRecursive(n - 1, t)
    (h :: left, right)
  }
}
def splitTailRecursive[T](n: Int, list: List[T]): (List[T], List[T]) = {
  def splitR(curN: Int, curL: List[T], pre: List[T]): (List[T], List[T]) =
    (curN, curL) match {
      case (_, Nil) => (pre, Nil)
      case (0, l) => (pre, l)
      case (n, h :: t) => splitR(n - 1, t, pre ++ List(h))
    }
  splitR(n, list, Nil)
}
split(3, listAbc)


// P18
def sliceBuiltin[T](start: Int, end: Int, list: List[T]): List[T] =
  list.slice(start, end)
def sliceFunctional[T](start: Int, end: Int, list: List[T]): List[T] =
  list.take(end).drop(start)
def sliceRecursive[T](start: Int, end: Int, list: List[T]): List[T] =
  (start, end, list) match {
    case (_, _, Nil) => Nil
    case (_, e, _) if e <= 0 => Nil
    case (s, e, h :: t) if s == 0 => h :: sliceRecursive(0, e - 1, t)
    case (s, e, _ :: t) => sliceRecursive(s - 1, e - 1, t)
  }
def sliceTailRecursive[T](start: Int, end: Int, list: List[T]): List[T] = {
  def sliceR[T](count: Int, curList: List[T], result: List[T]): List[T] =
    (count, curList) match {
      case (c, _) if c >= end => result
      case (c, h :: t) if c >= start => sliceR(c + 1, t, result ::: List(h))
      case (c, _ :: t) => sliceR(c + 1, t, result)
    }
  sliceR(0, list, Nil)
}
sliceFunctional(3, 7, listAbc)
sliceRecursive(3, 7, listAbc)
sliceTailRecursive(3, 7, listAbc)

// P19
def rotate[T](n: Int, list: List[T]): List[T] = {
  val wrapN = n % list.length
  if (wrapN >= 0) list.drop(wrapN) ++ list.take(wrapN)
  else list.drop(list.length + wrapN) ::: list.slice(0, list.length + wrapN)
}
def rotateRecursive[T](n: Int, list: List[T]): List[T] = {
  val wrapN = if (list.isEmpty) 0 else n % list.length
  if (wrapN < 0) rotate(wrapN + list.length, list)
  else (list drop wrapN) ::: (list take wrapN)
}
rotate(3, listAbc)
rotate(-3, listAbc)
rotate(25, listAbc)
rotateRecursive(-3, listAbc)
rotateRecursive(25, listAbc)


// P20
def removeAtFunctional[T](n: Int, list: List[T]): (List[T], T) =
  ((list take n) ::: (list drop n + 1), list(n))
def removeAt[T](n: Int, list: List[T]): (List[T], T) = list.splitAt(n) match {
  case (Nil, _) if n < 0 => throw new NoSuchElementException
  case (pre, e :: post) => (pre ::: post, e)
  case (_, Nil) => throw new NoSuchElementException
}
removeAt(0, listAbc)
removeAt(1, listAbc)
removeAt(5, listAbc)


// P21
def insertAt[T](e: T, n: Int, list: List[T]): List[T] =
  list.take(n) ::: List(e) ::: list.drop(n)
def insertAt2[T](e: T, n: Int, list: List[T]): List[T] = list.splitAt(n) match {
  case (pre, post) => pre ::: e :: post
}
insertAt('z', 1, listAbc)
insertAt('z', 5, listAbc)


// P22
def range(start: Int, end: Int): List[Int] = Range(start, end + 1).toList
def range2(start: Int, end: Int): List[Int] = (start to end + 1).toList
def range3(start: Int, end: Int): List[Int] = List.range(start, end + 1)
def rangeRecursive(start: Int, end: Int): List[Int] =
  if (end < start) Nil
  else start :: rangeRecursive(start + 1, end)
def rangeTailRecursive(start: Int, end: Int): List[Int] = {
  @tailrec
  def rangeR(count: Int, result: List[Int]): List[Int] =
    if (end < count) result
    else rangeR(count + 1, result ::: List(count))
  rangeR(start, Nil)
}
range(4, 9)
rangeRecursive(4, 9)
rangeTailRecursive(4, 9)


// P23
//def randomSelect[T](n: Int, list: List[T]): List[T] = (n, list) match {
//  case (0, _) => Nil
//  case (_, Nil) => Nil
//  case (n, ls) => removeAt(Random.between(0, ls.length), ls)._2 :: randomSelect(n - 1, ls)
//}
def randomSelect[T](n: Int, list: List[T]): List[T] =
  if (n <= 0) Nil
  else {
    val (rest, e) = removeAt((new util.Random).nextInt(list.length), list)
    e :: randomSelect(n - 1, rest)
  }
def randomSelect2[T](n: Int, list: List[T]): List[T] = {
  def randomSelectR[T](n: Int, list: List[T], r: util.Random): List[T] =
    if (n <= 0) Nil
    else {
      val (rest, e) = removeAt(r.nextInt(list.length), list)
      e :: randomSelectR(n - 1, rest, r)
    }
  randomSelectR(n, list, new util.Random)
}
randomSelect(listAbc.length, listAbc)
randomSelect2(listAbc.length, listAbc)


// P24
def lotto(n: Int, m: Int): List[Int] = {
  randomSelect(n, (1 to m).toList)
}
lotto(6, 49)


// P25
def randomPermute[T](list: List[T]): List[T] =
  randomSelect(list.length, list)
randomPermute(listA)
def randomPermute2[T: ClassTag](list: List[T]): List[T] = {
  val rand = new util.Random
  val a = list.toArray
  for (i <- a.length - 1 to 1 by -1) {
    val i1 = rand.nextInt(i + 1)
    val t = a(i)
    a.update(i, a(i1))
    a.update(i1, t)
  }
  a.toList
}
randomPermute2(listA)


// P26
def flatMapSubLists[T, U](list: List[T])(f: (List[T]) => List[U]): List[U] =
  list match {
    case Nil => Nil
    case _ :: tail => f(list) ::: flatMapSubLists(tail)(f)
  }
def combinations[T](k: Int, list: List[T]): List[List[T]] =
  if (k == 0) List(Nil)
  else flatMapSubLists(list) { sl =>
    combinations(k - 1, sl.tail) map { sl.head :: _}
  }
combinations(3, listA)


// P27
def group3[T](list: List[T]): List[List[List[T]]] =
  for {
    a <- combinations(2, list)
    noA = list diff a
    b <- combinations(3, noA)
  } yield {
    println(s"${a} : ${a.length}")
    List(a, b, noA diff b)
  }
group3(listPeople)
def group[T](ns: List[Int], list: List[T]): List[List[T]] = ns match {
  case Nil => List(Nil)
  case n :: ns => combinations(n, list) flatMap { c =>
    group(ns, list diff c) map { c :: _}
  }
}
group(List(2, 2, 5), listPeople)