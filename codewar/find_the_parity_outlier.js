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