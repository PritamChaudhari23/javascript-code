export class Account {
  constructor(id, customerId, balance) {
    this.id = id;
    this.customerId = customerId;
    this.balance = balance;
  }

  getSummary() {
    return `${this.id}: ${this.balance}`;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
  }
}
