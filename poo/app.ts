import BuffedAccount from "./class/BuffedAccount"
import CompanyAccount from "./class/CompanyAccount"
import PersonalAccount from "./class/PersonalAccount"

// Conta pessoal:
console.log('Conta pessoal:')
const personalAccount: PersonalAccount = new PersonalAccount('Nath', '1', '12345678901')
personalAccount.deposit(100)
personalAccount.withdraw(50)
console.log(personalAccount.getBalance())
personalAccount.setName('Nathalia')
console.log(personalAccount.getName())
console.log(personalAccount)
personalAccount.changeAccountStatus()
personalAccount.withdraw(50)

// Conta empresarial:
console.log('\n------------------')
console.log('Conta empresarial:')
const companyAccount: CompanyAccount = new CompanyAccount('DIO', '2', '123456789')
companyAccount.deposit(100)
companyAccount.withdraw(50)
console.log(companyAccount.getBalance())
companyAccount.setName('Digital Innovation One')
console.log(companyAccount.getName())
companyAccount.getLoan(1000)
companyAccount.changeAccountStatus()
companyAccount.getLoan(1000)
console.log(companyAccount)

// Conta buffada:
console.log('\n------------------')
console.log('Conta buffada:')
const buffedAccount: BuffedAccount = new BuffedAccount('Nath Buffada', '1')
buffedAccount.deposit(100)
console.log(buffedAccount.getBalance())