var largestTimeFromDigits = function(A) {
    let highestHour = 0
    let digits = []
    let highestMinute
    
    for (let i = 0; i < A.length; i++) {
        let n  = A[i] * 10
        if (n > 24) {
            continue
        }
        
        let m = Array.from(A)
        m.splice(i, 1)
        let o = []
        for (let j of m) {
            if (n + j < 24) {
                o.push(n + j)
            }
        }
        highestHour = o.length ? Math.max(...o) : 0
        digits = String(highestHour).split('').map(n => parseInt(n))
    }
    A.splice(A.indexOf(digits[0]) === -1, 1)
    A.splice(A.indexOf(digits[1]) === -1, 1)
};
