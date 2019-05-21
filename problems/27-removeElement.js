/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

const a = [0, 1, 2, 2, 3, 0, 4, 2];
let len = removeElement(a, 2);
console.log('a', a.slice(0, len));

/*

target = 2

          |
0 1 3 0 4 0 4 2
              |

*/