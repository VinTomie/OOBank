import Transaction from './Transaction.js';
import Account from './Account.js';

export default class Transfer extends Transaction {

	from_account
	to_account
	amount

	constructor(from_account, to_account, amount) {
		super()
		this.from_account = from_account;
		this.to_account = to_account;
		this.amount = amount;
		this.account = 'I messed up this creation, shouldve had an optional parameter in transaction for multiple accounts'
	}

	transfer() {
		this.from_account.setBalance(this.from_account.balance - this.amount)
		this.to_account.setBalance(this.to_account.balance + this.amount)
	}
}