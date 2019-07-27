// F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2) for n>1.

function fib(n) {
    // Naive approach
    // if (n <= 2) return 1;
    // return fib(n - 1) + fib(n - 2);

    // Memoization : top down
    // let memo = [];
    // function f(n) {
    //     let value;
    //     if (memo[n]) return memo[n];
    //     if (n <= 1) value = n;
    //     else value = f(n - 1) + f(n - 2);
    //     memo[n] = value;
    //     return value;
    // }
    // return f(n);

    // Memoization II : top down
    // if (memo[n]) return memo[n];
    // let result = fib(n - 1, memo) + fib(n - 2, memo);
    // memo[n] = result;
    // return result;

    // Dynamic programming - bottom up
    // if (n <= 1) return n;
    // let f = Array(n + 1);
    // f[0] = 0;
    // f[1] = 1;
    // for (let i = 2; i <= n; i++) {
    //     f[i] = f[i - 1] + f[i - 2];
    // }
    // return f[n];

    // Tabulation + memoization
    if (n <= 1) return 1;
    let memo = [undefined, 1, 1];
    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    console.log(memo)
    return memo[n];

    // https://leetcode.com/problems/fibonacci-number/discuss/223199/Java-O(2N)-greater-O(N)-greater-O(logN)
    //

}

console.log(fib(100));
