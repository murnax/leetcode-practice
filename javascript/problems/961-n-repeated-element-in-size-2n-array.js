var repeatedNTimes = function(A) {
    let hashTable = {}
    for (let a of A) {
        if (hashTable[a]) {
            hashTable[a] = hashTable[a] + 1
        } else {
            hashTable[a] = 1
        }
        if (hashTable[a] === A.length/2) {
            return a
        }
    }
};

console.log(repeatedNTimes([1,2,3,3]))