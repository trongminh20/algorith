function bouncer(arr){
    arr = arr.filter(arr => Boolean(arr));
    return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));