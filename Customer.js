import Account from './Account.js'



export class Customer {
    constructor(name, address, dateOfBirth, account) {
        this.name = name;        
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.account = account;
    }

    
    getName() {
        return this.name;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getAddress() {
        return this.address;
    }

    getDateOfBirth() {
        return this.dateOfBirth;
    }

    getAccount() {
        return this.account;
    }
}

const customer1 = new Customer(
    'John Doe',
    '123 Main Street',
    '1990-01-01',
    new Account('savings', 1000)
);
console.log(`${customer1.getName()} balance: ${customer1.getAccount().balance}`);
customer1.getAccount().deposit(500);
console.log('Customer balance after deposit:', customer1.getAccount().balance);