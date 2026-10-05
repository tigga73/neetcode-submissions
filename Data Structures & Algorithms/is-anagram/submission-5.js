class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }

        const tMap = new Map()
        const sMap = new Map()

        for(let i = 0; i < s.length; i++) {
            const hasLetterInSMap = sMap.has(s[i])
            const frequencyInSMap = hasLetterInSMap ? sMap.get(s[i]) + 1 : 1
            sMap.set(s[i], frequencyInSMap)

            const hasLetterInTMap = tMap.has(t[i])
            const frequencyInTMap = hasLetterInTMap ? tMap.get(t[i]) + 1 : 1
            tMap.set(t[i], frequencyInTMap)
        }

        for(let [key, value] of sMap) {
            if(tMap.get(key) !== value) {
                return false
            }
        }

        return true
    }
}
