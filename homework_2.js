//1 Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are larger than the given number.
function largerNumbers (arr, num) {
  const number = num;
  const resultArr = arr.filter((el, num) => el > number)
  if(!resultArr.length) {
    return 'Such values do not exist.'
  }
  return resultArr
}
largerNumbers([10, 25, 16, -5, 30, 15, 24], 16)

//2 Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.
function isAllDigitsEven(num1, num2) {
    const arr = [];
    let evenDigit;
    for (let i = num1; i <= num2; i++) {
      let str = "" + i;
      for (let j = 0; j < str.length; j++) {
        evenDigit = str[j] % 2 === 0;
        if(evenDigit === false) break
      }
      if(evenDigit) arr.push(i)
        }
        if (!arr.length) {
          return "Such numbers does not exist."
        }
         return arr.toString()
    }
isAllDigitsEven(19,42)

//3 Write a recursive function to determine whether all digits of the number are odd or not.
function isAllDigitsOdd(num) {
    if (num === 0 || num === 1) {
        return true;
    }
    else if ((num % 10) % 2 !== 0) {
        return isAllDigitsOdd((num - num % 10) / 10)
    } else {
        return false
    }
}
isAllDigitsOdd(4211133)

//4 Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․
function minPosNum(arr, smallest){
    if (arr.length === 0){
        return smallest;
    }
    else {
        let first = arr.shift();
        if (first < smallest && first > -1 || smallest === undefined){
            smallest = first;
        }
        if(smallest < 0) return -1
        return minPosNum(arr, smallest);
    }
}
minPosNum([-9, -23, -105])

//5 Create a function that builds a tree like object given an array with object which contains parent and id properties.
const arr = [
    {parent:null,id:0},
    {parent:0,id:1},
    {parent:0,id:2},
    {parent:1,id:3},
    {parent:1,id:4},
    {parent:2,id:5},
    {parent:4,id:6},
];
function objTree (arr) {
	const tree = {};
  
  arr.forEach(item => {
  	    if(item.parent === null){
  		    tree[item.id] = {};
  	}else{
			const current = objectById(tree, item.parent);
    	current[item.id] = {};
  	}
  })

	return tree;
}

function objectById (tree, parent) {
     if(tree.hasOwnProperty(parent)){
         return tree[parent];
 }
	for(let prop in tree){
  	    return objectById (tree[prop], parent)
  }
}
objTree(arr)
