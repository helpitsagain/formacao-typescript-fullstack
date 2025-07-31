import Account from "./Account";

export default class PersonalAccount extends Account {
    cpf: string;
    accountActive: boolean = true;

    constructor(name: string, accountNumber: string, cpf: string, accountActive?: boolean) {
        super(name, accountNumber)
        this.cpf = cpf;
        this.accountActive = accountActive ?? true;
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

        throw new Error(`Account #${this.getAccountNumber()} is inactive.`);
    }
}
