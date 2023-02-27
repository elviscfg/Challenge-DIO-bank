import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PetAccount } from "./class/PetAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Elvis", 101);
console.log(
  `O saldo da conta do cliente ${peopleAccount.getName()} é de ${peopleAccount.getBalance()} reis`
);
peopleAccount.deposit(100);
peopleAccount.withdraw(150);
console.log(
  `O saldo da conta do cliente ${peopleAccount.getName()} é de ${peopleAccount.getBalance()} reais`
);

console.log("----------------------------------------------")

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 202);
console.log(
  `O saldo da conta da empresa ${companyAccount.getName()} é de ${companyAccount.getBalance()} reais`
);
companyAccount.deposit(100);
companyAccount.withdraw(20);
console.log(
  `O saldo da conta da empresa ${companyAccount.getName()} é de ${companyAccount.getBalance()} reais`
);
companyAccount.getLoan(1000);
console.log(
  `O saldo da conta da empresa ${companyAccount.getName()} é de ${companyAccount.getBalance()} reais`
);

console.log("----------------------------------------------")

const petAccount: PetAccount = new PetAccount("Zeus", 301);
console.log(
    `O saldo da conta do pet ${petAccount.getName()} é de ${petAccount.getBalance()} reais`
  );
petAccount.deposit(100)
console.log(
    `O saldo da conta do pet ${petAccount.getName()} é de ${petAccount.getBalance()} reais`
  );
