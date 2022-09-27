
import Account from './Account.js'

export default class Bank {

	name; 
	accounts = [];

	constructor(name, accounts) {
		this.name = name;
		this.accounts = accounts;
	}

	getName() {
		console.log(this.name)
	}

	setAccounts(accounts) {
		this.accounts = accounts;
	}
}