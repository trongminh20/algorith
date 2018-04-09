function sum_all(arr){
    var a = Math.max.apply(Math,arr);
    var b = Math.min.apply(Math,arr);
    var count = 0;
    for(var i = b; i <=a; i++){
        count +=i;
    }
    return count;
    
}

console.log(sum_all([20,15]));