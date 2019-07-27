/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let counter = {};
    let duplicated = {};
    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in counter)) {
            counter[nums[i]] = i;
        } else {
            if (nums[i] in duplicated) {
                duplicated[nums[i]] = Math.min(duplicated[nums[i]], i - duplicated[nums[i]])
            } else {
                duplicated[nums[i]] = i - counter[nums[i]];
            }
        }
    }
    for (let j in duplicated) {
        if (duplicated[j] <= k) {
            return true;
        }
    }
    return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3), containsNearbyDuplicate([1, 2, 3, 1], 3) === true);
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1), containsNearbyDuplicate([1, 0, 1, 1], 1) === true);
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2) === false);