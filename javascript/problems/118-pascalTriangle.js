var pascalTriangle = function(numRows) {
    if (!numRows) return [];
    const result = [[1]];
    for (let i = 1; i < numRows; i++) {
        const shiftLeft = [...result[i - 1], 0];
        const shiftRight = [0, ...result[i - 1]];
        const row = shiftLeft.map((n, i) => n + (shiftRight[i] || 0));
        result.push(row);
    }
    return result;
}
module.exports = pascalTriangle;
