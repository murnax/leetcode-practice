/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {

    // Naive approach building strig
    // Time complexity : O(m+n)
    // Space complexity : O(m+n)
    // function helper(str) {
    //     let result = [];
    //     for (let i of str) {
    //         if (i === '#') {
    //             result.pop();
    //         } else {
    //             result.push(i);
    //         }
    //     }
    //     return result.join('');
    // }
    // return helper(S) === helper(T);

    // Two pointer (Solution)
    let i = S.length - 1, j = T.length - 1;
    let skipS = 0, skipT = 0;
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (S[i] === '#') {
                skipS++;
                i--;
            } else if (skipS > 0) {
                skipS--;
                i--;
            } else {
                break;
            }
        }
        while (j >= 0) {
            if (T[j] === '#') {
                skipT++;
                j--;
            } else if (skipT > 0) {
                skipT--;
                j--;
            }
        }
        if (i >= 0 && j >= 0 && S[i] != T[j]) {
            return false;
        }
        if (i >= 0 != j >= 0) {
            return false;
        }
        i--; j--;
    }
    return true;
};

console.log(backspaceCompare("ab#c", "ad#c"));

/*

   |
ab#c

ad#c
   |

*/