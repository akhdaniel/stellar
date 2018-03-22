# Stellar javascript SDK test scripts
Stellar network test scripts

# 1. Install stellar SDK

Run this command:

```
npm install --save stellar-sdk
```

# 2. Run 01-create-account.js

```
node 01-create-account.js
```

Save the 1st created account to file accounts.txt

```
node 01-create-account.js
```

Save the 2nd created account to file accounts.txt

# 3. Check account balance

Edit 02-check-account.js and set the pair public key of the account to check the balance. Then run this:

```
node 02-check-account.js
```

# 4. Transfer asset from account1 to account2

Edit 03-transfer.js and set your source account's secret key and destination account's public key.
Then run this 

```
node 03-transfer.js
```

Check again the account balance for each accounts.



# 5. Monitor payment

Edit 05-check-payment.js and set the account's public key to monitor for payment.
On another window, run the transfer script to this account. You will see the transaction is steramed in the monitoring window.

```
node 04-check-payment.js
```


