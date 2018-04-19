
var sum_pairs=function(ints, s){
    //ints.sort();
    //var a = ints.reverse();
    var res = [];
    var i = 0;
    while (ints[i]){
      for(var j = ints.length; j >= i;j--){
        if(ints[i] + ints[j] === s && i !== j){
          res.push(ints[i], ints[j]);
        }
      }
      i++;
    }
    console.log(ints);
    return res;
}



function test (){
var a = [
[1, 4, 8, 7, 3, 15],
[1, -2, 3, 0, -6, 1],
[20, -13, 40],
[1, 2, 3, 4, 1, 0],
[10, 5, 2, 3, 7, 5],
[4, -2, 3, 3, 4],
[0, 2, 0],
[5, 9, 13, -3]
]
return a[Math.floor(Math.random()*a.length)];

}

console.log(sum_pairs(test));


