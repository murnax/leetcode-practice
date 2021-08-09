// Brute force
// Space complexity = O(2^n)
// Time complexity = O(n)
const bruteForceSolution = (n, i = 0) => {
	if (i > n) return 0;
	if (i === n) return 1;
	return bruteForceSolution(n, i + 1) + bruteForceSolution(n, i + 2);
}

// Memoization
// Space complexity = O(n)
// Time complexity = O(n)
const memoizationSolution = (n) => {
	let memo = [];
	function helper(i, n) {
	    if (i > n) return 0;
	    if (i === n) return 1;
	    if (memo[i]) return memo[i];
	    memo[i] = helper(i + 1, n) + helper(i + 2, n);
	    return memo[i];
	}
	return helper(0, n);
}

// Dynamic Programming
const dpSolution = (n) => {
	if (n <= 2) return n;
	let f = new Array(n);
	f[1] = 1;
	f[2] = 2;
	for (let i = 3; i <= n; i++) {
	    f[i] = f[i - 1] + f[i - 2];
	}
	return f[n];
}

// Recursive
const recursiveSolution = (n) => {	
	if (n < 0) return 0;
	if (n === 0) return 1;
	return recursiveSolution(n - 1) + recursiveSolution(n - 2);
}

module.exports = {
	bruteForceSolution,
	memoizationSolution,
	dpSolution,
	recursiveSolution
};