class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const encoded = []
        for(let word of strs) {
            encoded.push(String(word.length), '#', word)
        }
        
        return encoded.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = []
        let i = 0
        while(i < str.length) {
            let j = i
            while(str[j] !== '#') {
                j++
            }
            let length = parseInt(str.substring(i, j))
            i = j + 1
            j = i + length
            res.push(str.substring(i, j))
            i = j
        }
        return res
    }
}
