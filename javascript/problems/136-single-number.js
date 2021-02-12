// My approach
var singleNumber = nums => {
    nums = nums.sort()
    for (let i = 0; i < nums.length; i = i + 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }
}

// List operation
var singleNumber = nums => {
    let noDuplicateList = []
    for (let i of nums) {
        if (noDuplicateList.indexOf(i) === -1) {
            noDuplicateList.push(i)
        } else {
            noDuplicateList.splice(noDuplicateList.indexOf(i), 1)
        }
    }
    return noDuplicateList.pop()
}

// Hash Table
var singleNumber = nums => {
    let hashTable = {}
    for (let i of nums) {
        if (hashTable[i])
            delete hashTable[i]
        else
            hashTable[i] = 1
    }
    return  Object.keys(hashTable)[0]
}

// Math
var singleNumber = nums => 2 * [...new Set(nums)].reduce((a, b) => a + b, 0) - nums.reduce((a, b) => a + b, 0)
