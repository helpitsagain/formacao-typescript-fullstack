import Account from "./Account";

export default class CompanyAccount extends Account {
    cnpj: string;

    deposit = (amount: number): void => {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }
        this.balance += amount;
        console.log(`Depositing $${amount} to ${this.getName()} account #${this.getAccountNumber()}. Current balance is $${this.balance}`);
    }

    getLoan: () => void = () => {
        console.log(`Getting a loan for company ${this.getName()}`);
    }

    constructor(name: string, accountNumber: string, cnpj: string) {
        super(name, accountNumber);
        this.cnpj = cnpj;
    }
}
