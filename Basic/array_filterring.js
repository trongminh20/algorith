var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function (n){
    if(n%2===0){
        return(n);
    }
    
});

console.log(filtered);

