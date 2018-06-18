/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
*/

function iqtest(numbers){
	var a = numbers.split(' ');
	var e = a.filter(v => v % 2 ==0);
	var o = a.filter(v => v % 2);

	return o.length < e.length ? a.indexOf(o[0])+1 : a.indexOf(e[0])+1;

}

console.log(iqtest("2 4 7 8 10"));

console.log(iqtest("2 1 2"));