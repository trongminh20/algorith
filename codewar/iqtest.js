function iqtest(numbers){
	var a = numbers.split(' ');
	var e = a.filter(v => v % 2 ==0);
	var o = a.filter(v => v % 2);

	return o.length < e.length ? a.indexOf(o[0])+1 : a.indexOf(e[0])+1;

}

console.log(iqtest("2 4 7 8 10"));

console.log(iqtest("2 1 2"));