import Account from "./Account";

export default class PersonalAccount extends Account {
    cpf: string;

    constructor(name: string, accountNumber: string, cpf: string, accountActive?: boolean) {
        super(name, accountNumber, accountActive)
        this.cpf = cpf;
    }

}
