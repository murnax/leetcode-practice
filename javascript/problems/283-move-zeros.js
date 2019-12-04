let moveZeroes = nums => {
    for (let i of nums) {
        if (i === 0) {
            nums.splice(nums.indexOf(0), 1)
            nums.push(0)
        }
    }
}

let nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums)