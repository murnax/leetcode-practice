/*

1) Understand problem

2) Explore example

3) Define step


*/

var permute = function (str) {
    let result = [];
    function helper(perm, word) {
        // console.log(perm, word);
        if (!word.length) {
            result.push((perm + word).split(''));
        }
        for (let i = 0; i < word.length; i++) {
            helper(perm + word[i], word.substr(0, i) + word.substr(i + 1, word.length));
        }
    }
    helper("", str.join(''));
    return result;
};

// var permute = function (nums) {
//     let result = [];
//     function helper(perm, n) {
//         console.log('', perm, n);
//         if (!n.length) {
//             result.push(perm, n);
//         }
//         for (let i = 0; i < n.length; n++) {
//             perm = [].concat(...perm, n[i])
//             n = [].concat(...n.slice(0, i), n.slice(i + 1, n.length));
//             console.log(perm, n);
//             helper(perm, n);
//         }
//     }
//     helper([], nums);
//     return result;
// }

const result = permute([1, 2, 3]);
console.log(result);