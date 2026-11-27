export class Bank {
  constructor(name, accounts) {
    this.name = name;
    this.accounts = accounts;
  }

  findAccount(id) {
    const account = this.accounts.find((a) => a.id === id);
    if (!account) throw new Error(`Account ${id} not found`);
    return account;
  }

  transfer(fromId, toId, amount) {
    const from = this.findAccount(fromId); // `this` must be the bank
    const to = this.findAccount(toId);
    from.withdraw(amount);
    to.deposit(amount);
    return `Transferred ${amount} from ${fromId} to ${toId}`;
  }
}
