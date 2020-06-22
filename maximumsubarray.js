//Objective is to find the sum of the subarray (in a 1-D array) that 
//gives the largest sum.

let nums = [-2,1,-3,4,-1,2,1,-5,4]


//O(n) solution that updates the current max w/ each element and 
//the total max that updates w/ the whole array.

let currMax = 0
let endMax = 0

for (let num of nums) {
    currMax = Math.max(num, num + currMax)
    endMax = Math.max(currMax, endMax)
}

return endMax