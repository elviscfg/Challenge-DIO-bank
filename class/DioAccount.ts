export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (depositValue: number): void => {
    if (this.validateStatus()) {
      this.balance += depositValue;
      console.log(`Voce depositou ${depositValue} reais`);
    }
  };

  withdraw = (withdrawValue: number): void => {
    if (this.validateStatus() && this.balance >= withdrawValue) {
      this.balance -= withdrawValue;
      console.log(`Voce sacou ${withdrawValue} reais`);
    } else {
      console.log("Saque não realizado. Motivo: Saldo insuficiente");
    }
  };

  setBalance = (value: number): void => {
    this.balance += value;
  };

  getBalance = (): number => {
    return this.balance;
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
