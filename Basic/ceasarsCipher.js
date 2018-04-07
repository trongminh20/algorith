function rot13(str) { 
   str = str.split('');
    
    for(var i in str){
        let a = str[i].charCodeAt(0);
        
        if(a > 90 || a < 65){continue;}
        
        if(a < 78){
            str[i] = String.fromCharCode(a + 13);
        }
        else{
            str[i] = String.fromCharCode(a -13);
        }
    }
    return str.join('');
}
console.log(rot13('// LBH QVQ VG!'));
console.log(rot13("SERR PBQR PNZC"));