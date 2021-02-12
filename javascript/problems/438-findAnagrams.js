

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let result = [];
    if (s.length < p.length) return result;

    let map = p.split('').reduce((a, b) => { a[b] = ++a[b] || 1; return a }, {});
    let counter = Object.keys(map).length;
    let begin = 0, end = 0;

    while (end < s.length) {
        let c = s[end];

        if (c in map) {
            --map[c] === 0 && --counter;
        }

        while (counter === 0) {
            if ((end - begin) + 1 === p.length) {
                result.push(begin);
            }
            let c = s[begin++];
            c in map && ++map[c] > 0 && counter++;
        }
        end++;
    }

    return result;
};
module.exports = findAnagrams;

// 4s very slow
// var findAnagrams = function (s, p) {
//     let result = [];
//     let pCounter = p.split('').reduce((a, b) => { a[b] = ++a[b] || 1; return a; }, {});
//     for (let i = 0; i < s.length - (p.length - 1); i++) {
//         let subString = s.slice(i, i + p.length);
//         let subStringCounter = {};
//         for (let j = 0; j < subString.length; j++) {
//             let char = subString[j];
//             if (!(char in pCounter)) {
//                 i += j;
//                 break;
//             }
//             subStringCounter[char] = ++subStringCounter[char] || 1;
//         }
//         if (Object.keys(pCounter).length === Object.keys(subStringCounter).length) {
//             let valid = true;
//             for (let k of Object.keys(subStringCounter)) {
//                 if (subStringCounter[k] !== pCounter[k]) {
//                     valid = false;
//                 }
//             }
//             valid && result.push(i);
//         }
//     }
//     return result;
// };

// 6s very very slow
// var findAnagrams = function (s, p) {
//     let result = [];
//     let pCounter = p.split('').reduce((a, b) => { a[b] = ++a[b] || 1; return a; }, {});
//     for (let i = 0; i < s.length - (p.length - 1); i++) {
//         let subString = s.slice(i, i + p.length);
//         let subStringCounter = {};
//         for (let j = 0; j < subString.length; j++) {
//             let char = subString[j];
//             if (!(char in pCounter)) break;
//             subStringCounter[char] = ++subStringCounter[char] || 1;
//         }
//         if (Object.keys(pCounter).length === Object.keys(subStringCounter).length) {
//             let valid = true;
//             for (let k of Object.keys(subStringCounter)) {
//                 if (subStringCounter[k] !== pCounter[k]) {
//                     valid = false;
//                 }
//             }
//             valid && result.push(i);
//         }
//     }
//     return result;
// };

// 8s ver very slow
// var findAnagrams = function (s, p) {
//     let result = [];
//     let pCounter = p.split('').reduce((a, b) => { a[b] = ++a[b] || 1; return a; }, {});
//     for (let i = 0; i < s.length - (p.length - 1); i++) {
//         let subString = s.slice(i, i + p.length);
//         let subStringCounter = {};
//         for (let j of subString) {
//             subStringCounter[j] = ++subStringCounter[j] || 1;
//         }
//         if (Object.keys(pCounter).length === Object.keys(subStringCounter).length) {
//             let valid = true;
//             for (let k of Object.keys(subStringCounter)) {
//                 if (subStringCounter[k] !== pCounter[k]) {
//                     valid = false;
//                 }

//             }
//             valid && result.push(i);
//         }
//     }
//     return result;
// };