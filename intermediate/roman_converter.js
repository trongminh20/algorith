function convertToRoman(num){
    var roman = {"M" :1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1}
    var conv = "";
    var val = Object.values(roman); // [values]
    
    var key = Object.keys(roman); //[keys]
    
    for(var i in val){
        while( num >= val[i]){
            conv +=key[i];
            num -=val[i];
        }
    }
    return conv;
}

console.log(convertToRoman(36));


/*
//all solution //

function convertToRoman(num) {
  var decimal =[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var coverted = "";
  for(var i = 0 ; i < decimal.length; i++){
    while(decimal[i] <= num){
      coverted += roman[i];
      num -= decimal[i];
    }
  }  
  return coverted;
}

convertToRoman(36);
*/