import Transaction from './Transaction.js';
import Account from './Account.js'

export default class Deposit extends Transaction {

	constructor(amount, account) {
		super(amount, account)
	}

	deposit() {
		this.account.setBalance(this.account.balance + this.amount)
	}


}