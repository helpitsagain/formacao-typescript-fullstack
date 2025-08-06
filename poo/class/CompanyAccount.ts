import Account from "./Account";

export default class CompanyAccount extends Account {
    private cnpj: string;

    getLoan = (amount: number): void => {
        if (!this.validateAccount()) {
            console.log(`Cannot grant loan. Account #${this.getAccountNumber()} is inactive.`);
            return;
        }

        const currentBalance = this.getBalance();

        this.setBalance(currentBalance + amount);

        console.log(`Loan of $${amount} granted to ${this.getName()}. Current balance is $${this.getBalance()}`);
    }

    constructor(name: string, accountNumber: string, cnpj: string) {
        super(name, accountNumber);
        this.cnpj = cnpj;
    }
}
