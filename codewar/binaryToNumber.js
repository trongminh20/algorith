const binaryArrayToNumber = arr => {
  arr = arr.join('');

  return parseInt(arr,2);
  
};

console.log(binaryArrayToNumber([0,1,0,1]));
console.log(binaryArrayToNumber([1,1,0,1]));