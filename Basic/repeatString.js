function repeatstring(str, num){
    if(num > 0){
        return str.repeat(num);
    }
    return 'number should be positive';
}

console.log(repeatstring('minhpahn',4));
console.log(repeatstring('love ',-5));
console.log(repeatstring('love ',5));