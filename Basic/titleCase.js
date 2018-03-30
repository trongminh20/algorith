function setUpper(str){
    var a = str.toLowerCase().split(' ');
    var c = '';
   
    for(var i = 0; i < a.length; i++){
        
        c = a[i].split('');
        
        c[0] = c[0].toUpperCase();
        
        a[i] = c.join('');
    }   
    
    str = a.join(' ');
    
    return str;
}

console.log(setUpper('avb dE'));