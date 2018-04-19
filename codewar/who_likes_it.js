const likes = names => {
  
  if (names.length === 0){
    return "no one likes this";
    
  }
  else if (names.length === 1){
    return names + " likes this";
    
  }
  else if( names.length >= 2){
    if(names.length <= 3){
    //adding 'and' into array before the last index
    names.splice(names.length -1, 0 ,"and");
    //join 3 last index of the array including 'and' which was added
    names.splice(names.length -3 , 3, names.slice(names.length -3, names.length).join(' '));

    for(var i in names){
      
      if(i >= 1){
      names[i] = ' ' + names[i];
    }
  }
    return names.toString(' ') + " like this";
    }
    
    if(names.length > 3){
      var count = 0;
      for (var i = 3; i <= names.length; i++){
        count++;
      }
      return names.slice(0,2).join(', ') + ' and '+ count + ' others like this';
      
    }
  }
  
}


function test() {
    var a = [];
    var b = Math.floor(Math.random()*100);

    for(var i =0; i < b; i++){
      a.push(i);
    }
  console.log(b);  
  return a;
}

console.log(likes(['Jacob', 'Alex']));

console.log(likes(test()));