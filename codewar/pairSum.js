
var sum_pairs=function(ints, s){

var n = [
[1, 4, 8, 7, 3, 15],
[1, -2, 3, 0, -6, 1],
[20, -13, 40],
[1, 2, 3, 4, 1, 0],
[10, 5, 2, 3, 7, 5],
[4, -2, 3, 3, 4],
[0, 2, 0],
[5, 9, 13, -3]
];

var b =[8,-6,-7,2,10,8,0,10];

var t =Math.floor(Math.random()*n.length);
ints = n[t]
s = b[t];

    var res = [];
    var i = 0;
    var len = ints.length;
    while (ints[i]){
      for(var j = i++; j <= len; j++){
        if(ints[i] + ints[j] === s && i!==j ){
          res.push(ints[i], ints[j]);
          len =j;
        }
      }
      i++;
    }
    console.log(ints,s);
    return res.length ? res:undefined;
}





console.log(sum_pairs());


