import Transaction from './Transaction.js';
import Account from './Account.js'

export default class Withdrawal extends Transaction {

	constructor(amount, account) {
		super(amount, account)
	}

	withdrawal() {
		this.account.setBalance(this.account.balance - this.amount)
	}


}