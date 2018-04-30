function BankAccount( lastname ) {
    this.lastname = lastname;
    var balance = 1000000;

    this.gt = function (){
    	return balance;
    }
}

function attackBalance(account){
   undefined ? account.balance = 5 : "cant attack";
    }
    
var safeAccount = new BankAccount('minh');
console.log(safeAccount.balance);
console.log(safeAccount.gt());

