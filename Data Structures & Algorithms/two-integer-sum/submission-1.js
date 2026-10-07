class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const result = new Map()

        for(let i = 0; i < nums.length; i++) {
            const difference = target - nums[i]

            if(result.has(difference)) {
                return [result.get(difference), i]
            }

            result.set(nums[i], i)
        }
    }
}
