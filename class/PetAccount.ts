import { DioAccount } from "./DioAccount";

export class PetAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (depositValue: number): void => {
    if (this.validateStatus()) {
      this.setBalance(depositValue + 10);
      console.log(`Voce depositou ${depositValue + 10} reais`);
    }
  };
}
