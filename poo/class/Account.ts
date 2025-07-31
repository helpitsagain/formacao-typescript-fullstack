export default abstract class Account {
    name: string;
    accountNumber: string;
    balance: number;

    constructor(name: string, accountNumber: string) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = 0
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