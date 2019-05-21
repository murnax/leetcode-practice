var flipAndInvertImage = function (A) {
    return A.map(a => a.map(n => n === 1 ? 0 : 1).reverse());
};

console.log(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]));