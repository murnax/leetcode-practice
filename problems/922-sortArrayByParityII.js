function sortArrayByParityII(A) {
    let result = Array(A.length);
    let evenPointer = 0;
    let oddPointer = 1;
    for (let i of A) {
        if (i % 2 === 0) {
            result[evenPointer] = i;
            evenPointer += 2;
        } else {
            result[oddPointer] = i;
            oddPointer += 2;
        }
    }
    return result;
}
console.log(sortArrayByParityII([4, 2, 5, 7]));