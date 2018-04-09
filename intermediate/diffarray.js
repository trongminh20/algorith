function diffarray(arr1, arr2){
    return arr1.filter(i => !arr2.includes(i)).concat(arr2.filter(i => !arr1.includes(i)));
}

console.log(diffarray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

