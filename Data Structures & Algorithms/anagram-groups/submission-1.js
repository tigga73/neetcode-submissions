class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = new Map()

        for(let str of strs) {
            const counts = new Array(26).fill(0)
            
            for(let s of str) {
                const index = s.charCodeAt(0) - "a".charCodeAt(0)
                counts[index] += 1
            }

            const key = counts.join(",")

            if(group.get(key)) {
                group.get(key).push(str)
            } else {
                group.set(key, [str])
            }
        }

        const res = []
        for(let [_key, value] of group) {
            res.push(value)
        }

        return res
    }
}