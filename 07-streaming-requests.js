var StellarSdk = require('stellar-sdk')
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
var lastCursor=0; // or load where you left off
var accountAddress='GAVUQX6NHJAY7LYGFFUXK5GZETKDHZ5B2XJNAC3EPKLEXFPW4SJKNS75';

var txHandler = function (txResponse) {
    console.log(txResponse);
};

var es = server.transactions()
    .forAccount(accountAddress)
    .cursor(lastCursor)
    .stream({
        onmessage: txHandler
    })
