/********************************************************
Stellar check newly created account script
Akhmad D. Sembiring
steps:
npm install --save stellar-sdk
*********************************************************/
var StellarSdk = require('stellar-sdk');

var pair = StellarSdk.Keypair.fromSecret('SB6UKQRDWY6WDYWIE7SAI22GPSWKJ4ZMO54CCBYZB635LSMD43G4ZF4F');

//display the key pair
secret = pair.secret();
console.log("secret: "+secret);
public= pair.publicKey();
console.log("public: "+public);


var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
// the JS SDK uses promises for most actions, such as retrieving an account
server.loadAccount(pair.publicKey()).then(function(account) {
  		console.log('Balances for account: ' + pair.publicKey());
  		account.balances.forEach(function(balance) {
    	console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
 });
});

