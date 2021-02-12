var flipAndInvertImage = function (A) {
    return A.map(a => a.map(n => n === 1 ? 0 : 1).reverse());
};
