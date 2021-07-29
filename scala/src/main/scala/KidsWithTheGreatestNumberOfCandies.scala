package leetcode

object KidsWithTheGreatestNumberOfCandies {
    def kidsWithCandies(candies: Array[Int], extraCandies: Int): Array[Boolean] = {
        val max = candies.max
        candies.map(_ + extraCandies >= max)
    }
}
