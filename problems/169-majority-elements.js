var majorityElement = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let hashTable = {}
    for (let i of nums) {
        if (hashTable[i]) {
            hashTable[i] = hashTable[i] + 1

            if (hashTable[i] > nums.length / 2) {
                return i
            }    
        } else {
            hashTable[i] = 1
        }
    }
};

console.log(majorityElement([2,2,1,1,1,2,2]))