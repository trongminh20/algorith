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