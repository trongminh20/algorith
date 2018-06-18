/*
Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

const binaryArrayToNumber = arr => {
  arr = arr.join('');

  return parseInt(arr,2);
  
};

console.log(binaryArrayToNumber([0,1,0,1]));
console.log(binaryArrayToNumber([1,1,0,1]));