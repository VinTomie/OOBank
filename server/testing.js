
import Bank from './Bank.js';
import Account from './Account.js';
import CheckingAccount from './CheckingAccount.js';
import MoneyMarketCheckingAccount from './MoneyMarketCheckingAccount.js';
import IndividualCheckingAccount from './IndividualCheckingAccount.js';

import Transaction from './Transaction.js';
import Deposit from './Deposit.js';
import Withdrawal from './Withdrawal.js';
import Transfer from './Transfer.js';

let newBank = new Bank('Carmatic');
let newAccount = new Account('Vince', 100)
let newCheckingAccount = new CheckingAccount('Vince', 100)
let newMoneyMarketCheckingAccount = new MoneyMarketCheckingAccount('Vincenzo', 200)
let newIndividualCheckingAccount = new IndividualCheckingAccount('Vince', 300)

newBank.setAccounts([newAccount, newMoneyMarketCheckingAccount, newIndividualCheckingAccount])

console.log('Miscellaneous data')
console.log(newBank)
console.log(newAccount)
console.log(newCheckingAccount)
console.log(newMoneyMarketCheckingAccount)
console.log(newIndividualCheckingAccount)
console.log('------------------')

let firstDeposit = new Deposit(200, newCheckingAccount)
console.log(newCheckingAccount)
console.log(firstDeposit)
console.log('Depositting money...')
firstDeposit.deposit()
console.log(newCheckingAccount)
console.log('------------------')
//new value should be 300
//where is my testing framework though

let firstWithdrawal = new Withdrawal(200, newCheckingAccount)
console.log(newCheckingAccount)
console.log(firstWithdrawal)
console.log('Withdrawing money...')
firstWithdrawal.withdrawal()
console.log(newCheckingAccount)
console.log('------------------')
//new balance should be 100
//actual testing framework if i have time

//transfer from our checking to money market
let firstTransfer = new Transfer(newCheckingAccount, newMoneyMarketCheckingAccount, 50)
console.log(newMoneyMarketCheckingAccount) // should be 200
console.log(firstTransfer)
firstTransfer.transfer()
console.log('Transferring money...')
console.log(newCheckingAccount) //should be 50
console.log(newMoneyMarketCheckingAccount) // should be 250
console.log('------------------')
