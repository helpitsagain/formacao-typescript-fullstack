import Account from "./Account";

export default class BuffedAccount extends Account {
    privatedeposit = (amount: number): void => {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }
        const currentBalance = this.getBalance();
        this.setBalance(currentBalance + amount + 10);
        console.log(`Depositing $${amount} to buffed account #${this.getAccountNumber()}. Buffed balance is $${this.getBalance()}`);
    }
}