//1. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
function concatArrs (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(concatArrs(arr[i]))
    } else {
      result.push(arr[i])
    }
  } return result
}
concatArrs([1, [3, 4, [1, 2]], 10])

// 2. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.
function sumOfDigits (num) {
  let arrOfNum = num.toString().split("").map(x=>+x);
  let sum = 0;
  sum = arrOfNum.reduce((a, b) => a + b);
  if (sum < 10) {
    return sum
  } 
    return sumOfDigits(sum)
}
sumOfDigits(999999999999)

//3. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.
function keyAndValues (obj) {
  let result = {};
  for (let i in obj) {
    if(Object.keys(result).includes(obj[i])){
        result[obj[i]] = [...result[obj[i]], i]
    }else{
        result[obj[i]] = i
    	}
	} return result;
}
keyAndValues({ a: '1', b: '2', c: '2'})

//4. Given a string of digits, output all the contiguous substrings of length n in that string.
function subDigits (str, num) {
let result = '';
for(let i in str){
    if(i > str.length - num ){
        console.log(result.slice(0, -1))
        break
    }
    result = result + (str.substr(i, num)) + ","
  }
}
subDigits('495215', 3)
subDigits('abcdfghz', 7)

//5. Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.
function allNumsBetweenMaxAndMin(arr) {
  arr.sort((a,b) => a - b)
  let min = arr[0];
  let max = arr[arr.length - 1]
  return max - min - arr.length + 1
}
allNumsBetweenMaxAndMin([1, 3, 4, 2, 10])

//6.Write a JavaScript function to get all possible subsets of given length of the given array. Assume that all elements in the array are unique.
function allPossibleSubsets(arr, num) {
    let result = [];
    function subArr(index, arr1) {
        if (num === arr1.length) {
            result.push(arr1);
            return;
        } else if (index === arr.length) {
            return;
        } else {
            subArr(index + 1, arr1.concat([arr[index]]));
        }
        subArr(index + 1, arr1);
    }
    subArr(0, []);
    return result;
}
allPossibleSubsets([1, 2, 3, 4], 3)
