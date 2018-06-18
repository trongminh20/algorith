/*

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.



*/
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


