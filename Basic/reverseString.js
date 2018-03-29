function reversed(str){
    var a = str.split('');
    a = a.reverse();
    str = a.join('');
    
    return str;
}

var b = "abc";
//console.log('b: '+ b.reverse());
console.log(reversed('hello'));