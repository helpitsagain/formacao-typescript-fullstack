export default abstract class Account {
    private name: string;
    readonly accountNumber: string;
    protected balance: number;
    accountActive: boolean = true;

    constructor(name: string, accountNumber: string, accountActive: boolean = true) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = 0
        this.accountActive = accountActive;
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
        if (!this.accountActive) {
            console.log(`Cannot deposit. Account #${this.accountNumber} is inactive.`);
            return;
        }

        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }

        this.balance += amount;
        console.log(`Depositing $${amount} to account #${this.accountNumber}. Current balance is $${this.balance}`);
    }

    withdraw = (amount: number): void => {
        if (!this.accountActive) {
            console.log(`Cannot withdraw. Account #${this.accountNumber} is inactive.`);
            return;
        }

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

    changeAccountStatus = (): void => {
        this.accountActive = !this.accountActive;
        console.log(`Account #${this.getAccountNumber()} status changed to ${this.accountActive ? "active" : "inactive"}.`);
    }

    validateAccount = (): boolean => {
        if (this.accountActive) {
            console.log(`Account #${this.getAccountNumber()} is active.`);
            return this.accountActive;
        } 

        console.log(`Account #${this.getAccountNumber()} is inactive.`);
        return this.accountActive;
    }
}