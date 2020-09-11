function dis(val) 
		{ 
			document.getElementById("result").value+=val 
		} 
		

		function solve() 
		{ 
			let x = document.getElementById("result").value 
			let y = eval(x) 
			document.getElementById("result").value = y 
		} 
		

		function clr() 
		{ 
			document.getElementById("result").value = "" 
		} 



function palindrome(str) {
    const reversed = str
    .split('')
    .reverse()
    .join('');

    return str === reversed;
}


    function anagrams(stringA, stringB) {


        stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
        stringB = stringB.replace(/[^\w]/g, "").toLowerCase()


        const charMapA = getCharMap(stringA)
        const charMapB = getCharMap(stringB)



        for (let char in charMapA) {
            if (charMapA[char] !== charMapB[char]) {
                return false
            }
        }

        return true
    }

    function getCharMap(string) {

        let charMap = {}

        for (let char of string) {
            charMap[char] = charMap[char] + 1 || 1
        }
        return charMap
    }
