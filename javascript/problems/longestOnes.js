function longestOnes(A, K) {
    let i = 0, j;
    for (j = 0; j < A.length; ++j) {
        if (A[j] === 0) K--;
        if (K < 0 && A[i++] === 0) K++;
    }
    return j - i;
}
