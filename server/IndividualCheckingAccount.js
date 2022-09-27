
import CheckingAccount from './CheckingAccount.js'

export default class IndividualCheckingAccount extends CheckingAccount {

	withdrawal_limit = 1000

	constructor(owner, balance) {
		super(owner, balance)
	}
	
}