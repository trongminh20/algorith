function duplicateCount(text){
 var a = text.toLowerCase().split('').sort();
 
 return a;
}

console.log(duplicateCount("abacde"));