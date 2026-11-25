export class Account {
  constructor(id, customerId, balance) {
    this.id = id;
    this.customerId = customerId;
    this.balance = balance;
  }

  getSummary() {
    return `${this.id}: ${this.balance}`;
  }
}
