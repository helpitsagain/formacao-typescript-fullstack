// Dio Banking
// name, accountNumber, balance
// deposit, withdraw, getBalance

abstract class Account {
    name: string;
    accountNumber: string;
    balance: number;

    constructor(name: string, accountNumber: string) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = 0
    }

    deposit = (amount: number): void => {
        console.log(`Depositing ${amount} to account ${this.accountNumber}`);
    }

    withdraw = (amount: number): void => {
        console.log(`Withdrawing ${amount} from account ${this.accountNumber}`);
    }

    getBalance = (): void => {
        console.log(`Current balance is ${this.balance}`);
    }
}

class UserAccount extends Account {
    docId: string;

    constructor(name:string, accountNumber:string, docId: string) {
        super(name, accountNumber)
        this.docId = docId;
    }
}

const userAccount: UserAccount = new UserAccount("John Doe", "0001", "123456789");
console.log(userAccount)
