import { accounts } from "../data/seed.js";
import { Account } from "../src/Account.js";

// Function version
function AccountFn(id, customerId, balance) {
  this.id = id;
  this.customerId = customerId;
  this.balance = balance;
}

AccountFn.prototype.getSummary = function () {
  return `${this.id}: ${this.balance}`;
};

const fnAccounts = accounts.map(
  (a) => new AccountFn(a.id, a.customerId, a.balance),
);
const classAccounts = accounts.map(
  (a) => new Account(a.id, a.customerId, a.balance),
);

// Same behavior
console.log(fnAccounts[0].getSummary()); // ACC1001: 5000
console.log(classAccounts[0].getSummary()); // ACC1001: 5000
console.log(fnAccounts[0].hasOwnProperty("getSummary")); // false
console.log(classAccounts[0].hasOwnProperty("getSummary")); // false
console.log(classAccounts[0].getSummary === classAccounts[1].getSummary); // true
console.log(Object.getPrototypeOf(classAccounts[0]) === Account.prototype); // true

// Where class differs
try {
  Account("X", "C1", 0);
} catch (e) {
  console.log(e.message); // Class constructor Account cannot be invoked without 'new'
}

for (const key in new AccountFn("X", "C1", 0)) console.log("fn:", key);
for (const key in new Account("X", "C1", 0)) console.log("class:", key);
