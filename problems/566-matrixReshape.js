/*

1) Understand the problem

Given three parameters: a 2d array (nums), row (r), column (c), travel the matrix using row-traveling and reshape it to new matrix with row and column given in parameters
But if data in matrix can not reshape to new row * column matrix, return original one

2) Explore examples

[[1, 2], [3, 4]], 1, 4 -> [[1, 2, 3, 4]]

[[1, 2], [3, 4]], 2, 3 -> [[1, 2], [3, 4]] # can not reshape

3) Define steps

- if nums.length * nums[0].length not equal to r * c, return nums
- declare result array with fixed rows and columns, JS -> Array(r).fill(Array(c))
- declare current row and column in new matrix, start with 0, 0
- iterate through each row in nums
    - iterate through each column in row
        - set result[current row][current column] to column value
        - if current column >= c
            - set current column to zero
            - increase current row by one
        - else
            - increase current column by one
- return result

4) Simplify

5) Refactor

*/
var matrixReshape = function (nums, r, c) {
    // if (nums.length * nums[0].length !== r * c) return nums;
    // if (nums.length === r && nums[0].length === c) return nums;
    // Naive approach
    // let result = Array(r);
    // let r_pointer = 0, c_pointer = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums[i].length; j++) {
    //         if (!result[r_pointer]) result[r_pointer] = [];
    //         result[r_pointer].push(nums[i][j]);

    //         if (c_pointer === c - 1) {
    //             c_pointer = 0;
    //             r_pointer++;
    //         } else {
    //             c_pointer++;
    //         }
    //     }
    // }
    // return result;

    // Flat and reduce
    return (nums.length * nums[0].length !== r * c) ? nums : [].concat(...nums).reduce((result, key, index) => (index % c === 0 ? result.push([key]) : result[result.length - 1].push(key)) && result, []);
};
console.log(matrixReshape([[1, 2, 3], [4, 5, 6]], 3, 2));