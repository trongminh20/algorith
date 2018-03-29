function polydrome(str){
    /*var a = str.toLowerCase();
    console.log('a: ' + a);
    var b = a.split('');
    console.log('b: '+b);
    */
    var check = /[\W_]/g;
    /*
    a = a.replace(check,'');
    
    console.log('a2: '+ a);
    */
    var a = str.toLowerCase().replace(check,'');
    //console.log('a: '+a)
    var b = a.split('').reverse().join('');
    //console.log('b: '+b)
    return a === b;
}

console.log (polydrome('abccba'));

console.log(polydrome('this is test'));
