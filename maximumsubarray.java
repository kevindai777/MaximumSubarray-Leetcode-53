//Java Solution

class Solution {
    public int maxSubArray(int[] nums) {
        int currMax = 0;
        int endMax = Integer.MIN_VALUE;
        
        for (int num : nums) {
            currMax += num;
            endMax = Math.max(currMax, endMax);
            
            if (currMax < 0) {
                currMax = 0;
            }
        }
        
        return endMax;
    }
}