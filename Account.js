import Transaction from './Transaction.js'


export default class Account {
    constructor(type, balance) {
        this.type = type;
        this.balance = balance;
    }

    deposit(value) {
        const transaction = new Transaction(value, 'credit')
        this.balance += transaction.getValue()
    }

    withdraw(value) {
        const transaction = new Transaction(value, 'debit')
            if (this.balance >= transaction.getValue()) {
                this.balance -= transaction.getValue()
            console.log(`Withdrawal of ${value} successful. New balance: ${this.balance}`);
            } else {
            console.log('Insufficient funds for withdrawal.')
        }
    }
}