export default abstract class Account {
    private name: string;
    private accountNumber: string;
    protected balance: number;

    constructor(name: string, accountNumber: string) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = 0
    }

    setName = (name: string): void => {
        this.name = name;
        console.log(`Account name set to ${this.name}`);
    }

    getName = (): string => {
        return this.name;
    }

    getAccountNumber = (): string => {
        return this.accountNumber;
    }

    deposit = (amount: number): void => {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }
        this.balance += amount;
        console.log(`Depositing $${amount} to account #${this.accountNumber}. Current balance is $${this.balance}`);
    }

    withdraw = (amount: number): void => {
        if (amount <= 0 || amount > this.balance) {
            console.log("Invalid withdrawal amount.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawing $${amount} from account #${this.accountNumber}. Current balance is $${this.balance}`);
    }

    getBalance = (): number => {
        console.log(`Current balance is $${this.balance}`);
        return this.balance;
    }
}