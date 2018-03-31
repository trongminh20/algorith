function longestWord(str){
    var a = str.split(' ');
    
    console.log(a);
    var b = [];
    for(var i= 0; i < a.length; i++){
        b.push(a[i].length);
    }
    return Math.max(...b);
}

console.log(longestWord('this is the logest string ontherword'));