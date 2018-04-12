function myReplace(str, before, after){
	var a = str.indexOf(before);

	if(str[a] === str[a].toUpperCase()){
		let b = after.split('').slice(1).join('');

		after = after.charAt(0).toUpperCase()	 +b;
	}
	return str.replace(before,after);
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));