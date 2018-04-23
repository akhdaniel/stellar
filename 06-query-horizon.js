var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
// get a list of transactions that occurred in ledger 1400
server.transactions()
    .forLedger(1400)
    .call().then(function(r){ console.log(r); });

// get a list of transactions submitted by a particular account
server.transactions()
    .forAccount('GAVUQX6NHJAY7LYGFFUXK5GZETKDHZ5B2XJNAC3EPKLEXFPW4SJKNS75')
    .call().then(function(r){ console.log(r); });

