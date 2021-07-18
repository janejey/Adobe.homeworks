//1 Given an array of numbers. Print frequency of each unique number. (Frequency is the count of particular element divided by the count of all elements)
function frequency (arr){
	let result = {};
	for (let i = 0; i < arr.length; i++){
		if(result[arr[i]] == undefined) {
			result[arr[i]] = 1;
		} else {
			result[arr[i]]++;
		}
		result[arr[i]] /= arr.length
	}return result;
}
console.log(frequency([1, 2, 3]))


//2 Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string․ If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).
function findLongestWord(str) {
	const strArr = str.split(/([,.?!:" "])/g);
	let longestWord = "";
	for(let i = 0; i < strArr.length; i++){
		if(strArr[i].length > longestWord.length){
			longestWord = strArr[i];
		}
	}
	return longestWord
}
console.log(findLongestWord('A revolution without dancing is a revolution... not worth havingggggg.,.'))

//3 Write a function to find longest substring in a given a string without repeating characters except space character. If there are several, return the last one. Consider that all letters are lowercase.
function getLongestSubstring(str) {
    string="";
    resultStr="";
    strArr=str.split("");
    for(let i = 0; i < strArr.length; i++) {
        for(let j = i; j < strArr.length; j++) {
            if(string.includes(strArr[j]) === false || strArr[j] === " ")
               string += strArr[j];
            else 
                 break;
         }
         if(resultStr.length <= string.length)
             resultStr = string;
         string = "";
    }
    return resultStr;
}
console.log(getLongestSubstring('parting your soup is not a miracle, bruce.'));

//4 Write a function to compute a new string from the given one by moving the first char to come after the next two chars, so "abc" yields "bca";. Repeat this process for each subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.
function moveChars(str) {
    let slicedStr = [];
    let word = "";
    for (let i = 0; i < str.length; i += 3) {
        let tmp = str.moveChars(i, i + 3)
        slicedStr.push(tmp)
        tmp = "";
    }
    for (let i = 0; i < slicedStr.length; i++) {
        if (slicedStr[i].length === 3) {
            word += slicedStr[i][1] + slicedStr[i][2] + slicedStr[i][0]
        } else {
            word += slicedStr[slicedStr.length - 1]
        }
    }
    return word
}

console.log(moveChars('dfgjkloyp'));

//5 Write a function, which receives an array as an argument which elements arrays of numbers. Find biggest negative number of each array. Return product of that numbers.If there is not any negative number in an array, ignore that one. Check that items of the given array are arrays.
function biggestNegativeNumber(arr) {
    let max = -Infinity;
    let min = 0;
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            return 'Invalid argument';
        }
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max && arr[i][j] < min) {
                max = arr[i][j]
            }
        }
        if (max === -Infinity) continue
        sum *= max;
        max = -Infinity;
    }
    if (sum === 1) {
        return 'No negatives'
    }
    return sum
}
console.log(biggestNegativeNumber([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]))

//6 Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all elements in the array are unique.
function subsets (arr){
    let result = [];
    if (arr.length < 3) {
      return arr
     } else {
      for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            for(let k = j + 1; k < arr.length; k++) {
                result.push([arr[i], arr[j], arr[k]]);    
            }
        }
      }
    }
    return result;
}
console.log(subsets([19, 6]));
