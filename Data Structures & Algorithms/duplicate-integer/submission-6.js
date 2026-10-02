class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const setNums = new Set(nums)

        if(setNums.size < nums.length) {
            return true
        }

        return false
    }
    // Array.map() is O(n) because it iterates over every element in the array once.
    // new Set(arr) is O(n) because still need to iterate over every element in the array once.
}
