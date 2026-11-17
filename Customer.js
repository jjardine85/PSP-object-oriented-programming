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