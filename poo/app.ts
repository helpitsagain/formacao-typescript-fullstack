import CompanyAccount from "./class/CompanyAccount";
import PersonalAccount from "./class/PersonalAccount";

const userAccount: PersonalAccount = new PersonalAccount("John Doe", "0001", "123456789");
userAccount.deposit(1000);

const companyAccount: CompanyAccount = new CompanyAccount("Tech Corp", "0002", "987654321");
companyAccount.deposit(5000);

userAccount.setName("Jane Doe");

userAccount.validateAccount();

userAccount.changeAccountStatus()
userAccount.validateAccount();