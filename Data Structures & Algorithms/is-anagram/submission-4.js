class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const tMap = new Map()
        const sMap = new Map()

        for(let i = 0; i < s.length; i++) {
            const hasLetter = sMap.has(s[i])
            const frequency = hasLetter ? sMap.get(s[i]) + 1 : 1
            sMap.set(s[i], frequency)
        }

        for(let i = 0; i < t.length; i++) {
            const hasLetter = tMap.has(t[i])
            const frequency = hasLetter ? tMap.get(t[i]) + 1 : 1
            tMap.set(t[i], frequency)
        }

        if(sMap.size !== tMap.size) {
            return false
        }

        for(let [key, value] of sMap) {
            if(tMap.get(key) !== value) {
                return false
            }
        }

        return true
    }
}
