/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/


function getMiddle(s){
	var len = s.length;

	return len % 2 ? s.substr(len/2,1) : s.substr((len/2)-1,2);
	/*
	if(len  % 2 !==0){
		return s.substr(len/2,1);
	}else{
		return s.substr((len/2)-1, 2);
	}
	*/
}

console.log(getMiddle("testing"));