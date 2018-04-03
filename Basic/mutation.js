function mutation(arr) {
    var b =[];

    for (var i in arr){
        b.push(arr[i].toLowerCase());
    } 
    
    //return b;
  
    for(var j = 0; j < b[1].length; j++){
        if(b[0].indexOf(b[1][j]) === -1){
            return false;
        }
    }
        return true;
}

mutation(["hello", "hey"]);


