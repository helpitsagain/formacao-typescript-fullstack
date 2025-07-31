import Account from "./Account";

export default class PersonalAccount extends Account {
    cpf: string;

    constructor(name: string, accountNumber: string, docId: string) {
        super(name, accountNumber)
        this.cpf = docId;
    }
}
