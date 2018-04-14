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