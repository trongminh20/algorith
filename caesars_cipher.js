/*
You need to write a function, which will take a string encoded with Caesar cipher as a parameter and decode it.
The one used here is ROT13 where the value of the letter is shifted by 13 places. e.g. 'A' ↔ 'N', 'T' ↔ 'G'.
You have to shift it back 13 positions, such that 'N' ↔ 'A'.
*/


function rot13(str){
	//split string into a character array
	return str.split('')
	//iterate over each character in the array
	.map.call(str,function(ch){
		//covert 'ch' to a character code
		x = ch.charCodeAt(0);
		//checks if character lies between A-Z
		if(x < 65 || x >90){
			//return uncovert character
			return String.fromCharCode(x);
		}
		//N = ASCII 78, if the character code is less than 78
		//shift foward 13 places
		else if(x < 78){
			return String.fromCharCode(x + 13);
		}
		//otherwise shift the character 13 place backward
		else{
			return String.fromCharCode(x - 13);
		}
	}).join(''); // rejointhe array into a string.
}

//test with some cases
rot13("SERR PBQR PNZC");
rot13("SERR PBQR PNZC");