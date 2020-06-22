//Objective is to find the sum of the subarray (in a 1-D array) that 
//gives the largest sum.

let nums = [-2,1,-3,4,-1,2,1,-5,4]


//O(n) solution that updates the current max w/ each element and 
//the total max that updates w/ the whole array.

let currMax = nums[0]
let endMax = nums[0]

for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], nums[i] + currMax)
    endMax = Math.max(currMax, endMax)
}

return endMax