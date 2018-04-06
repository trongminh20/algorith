function getIndexToIns(arr,num){
    arr.sort((a,b)=>{
        return a-b;
    });
    
    var i = 0; 
    
    while(arr[i] < num){
        i++;
    }
    return i;
    
}

console.log(getIndexToIns([40, 60], 50));

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));

