/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers){
  var od = [];
  var ev= [];
  
  for(var i in integers){
     integers[i] % 2 ? od.push(integers[i]) : ev.push(integers[i]);
  }
  return od.length > ev.length ? parseInt(ev) : parseInt(od);
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));