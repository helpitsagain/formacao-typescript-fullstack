import Account from "./Account";

export default class PersonalAccount extends Account {
    private cpf: string;

    constructor(name: string, accountNumber: string, cpf: string) {
        super(name, accountNumber)
        this.cpf = cpf;
    }

}
