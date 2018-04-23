/********************************************************
Stellar create account script
Akhmad D. Sembiring
steps:
npm install --save stellar-sdk
*********************************************************/
var StellarSdk = require('stellar-sdk');

// generate secret key and public key
var pair = StellarSdk.Keypair.random();

//display the key pair
secret = pair.secret();
public = pair.publicKey();
console.log("secret: "+secret);
console.log("public: "+public);


// The SDK does not have tools for creating test accounts, so you'll have to
// make your own HTTP request.
var request = require('request');
request.get({
  url: 'https://friendbot.stellar.org',
  qs: { addr: pair.publicKey() },
  json: true
}, function(error, response, body) {
  if (error || response.statusCode !== 200) {
    console.error('ERROR!', error || body);
  }
  else {
    console.log('SUCCESS! You have a new account :)\n', body);
	var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
	// the JS SDK uses promises for most actions, such as retrieving an account
	server.loadAccount(pair.publicKey()).then(function(account) {
  		console.log('Balances for account: ' + pair.publicKey());
  		account.balances.forEach(function(balance) {
    	console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
  	});
	});

  }
});

