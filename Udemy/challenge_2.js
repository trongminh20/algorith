
var  age = [];
var bol = [];
var result = [];
function calAge(){
	var name = [];
	while(age.length < 2){
		var inputYear = prompt('when? ');
		var inputName = prompt('name? ');
		
		if(2018 - inputYear > 0 ){	
			age.push(2018 - inputYear);
			name.push(inputName);
		}else{
			alert('retype input!');
		}	
	}
	
	age.forEach(i => i >= 18? bol.push(true):bol.push(false));
	
	for(var i in bol){
		result.push(name[i]+":"+bol[i]+"<br/>");
	}


	return result;


}

document.write(calAge());

