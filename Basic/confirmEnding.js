
function confirmEnding(str, target) {
  var b = target.length;
  
  
  if ( str.substr(str.length - b) === target ){
    return true;
  }
  return false;
  
    
    
}

confirmEnding("Open sesame", "same")

