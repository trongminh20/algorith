/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

function maskify(cc) {
  var a = cc.split('');

  for(var i = 0; i < a.length -4; i++){
  	a[i]= a[i].replace(a[i],"#");
  }

  return a.join('');
  
}

console.log(maskify('4556364607935616'));

/* 
function maskify(cc){
	return cc.slice(0, 4).replace(/./g,'#') + cc.slice(-4);
}

*/