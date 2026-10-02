class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const setNums = new Set()

        nums.map(el => setNums.add(el))

        if(setNums.size < nums.length) {
            return true
        }

        return false
    }
}
