//Objective is to find the sum of the subarray (in a 1-D array) that 
//gives the largest sum.

let nums = [-2,1,-3,4,-1,2,1,-5,4]


//O(n) solution that has a current max that updates w/ each element and 
//a total max that updates w/ the whole array.

let currMax = nums[0]
let endMax = nums[0]

for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], nums[i] + currMax)
    endMax = Math.max(currMax, endMax)
}

return endMax


//O(n) solution that uses Kadane's Algorithm

let currSum = 0
let endSum = -Infinity

for (let num of nums) {
    currSum += num
    endSum = Math.max(endSum, currSum)
    //If it's a negative prefix sum, forget about it and reset
    currSum = Math.max(0, currSum)
}

return endSum
