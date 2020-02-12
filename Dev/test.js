const Blockchain = require('./blockchain');

const medChain = new Blockchain();

const bc1 =
{
"chain": [
{
"index": 1,
"timestramp": 1562490296286,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timestramp": 1562491590867,
"transactions": [
{
"amount": 100,
"sender": "sudip",
"transactionId": "4871d190a09911e99e39ddaacf4de8e1"
}
],
"nonce": 163336,
"hash": "0000c1d89c2ff1a6fef1fe02f068d2d6fe8b86747ac6dc16da0b0daddab59aea",
"previousBlockHash": "0"
},
{
"index": 3,
"timestramp": 1562491616787,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recepient": "4a4168d0a09611e99e39ddaacf4de8e1",
"transactionId": "4de9d000a09911e99e39ddaacf4de8e1"
},
{
"amount": 500,
"sender": "sudip",
"transactionId": "59861270a09911e99e39ddaacf4de8e1"
}
],
"nonce": 39258,
"hash": "000042e71dbd5a6125a3e6e06a510af284c1b1da1b7fd6f915e8c6a2b3c2dba8",
"previousBlockHash": "0000c1d89c2ff1a6fef1fe02f068d2d6fe8b86747ac6dc16da0b0daddab59aea"
},
{
"index": 4,
"timestramp": 1562492248641,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recepient": "4a4168d0a09611e99e39ddaacf4de8e1",
"transactionId": "5d56f090a09911e99e39ddaacf4de8e1"
},
{
"amount": 8800,
"sender": "sudip",
"transactionId": "c54ff470a09a11e99e39ddaacf4de8e1"
},
{
"amount": 8800,
"sender": "sudip",
"transactionId": "c84d07d0a09a11e99e39ddaacf4de8e1"
}
],
"nonce": 88524,
"hash": "0000a44c69691b081b8746aed20fdb9207db6543d0cf59774aaeb56ca119205d",
"previousBlockHash": "000042e71dbd5a6125a3e6e06a510af284c1b1da1b7fd6f915e8c6a2b3c2dba8"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recepient": "4a4168d0a09611e99e39ddaacf4de8e1",
"transactionId": "d5f39930a09a11e99e39ddaacf4de8e1"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};

console.log('VALID : ', medChain.chainIsValid(bc1.chain));

//console.log('previousBlockHash =>',prevBlock['hash']);
//console.log('currentBlockHash =>', currentBlock['hash']);
