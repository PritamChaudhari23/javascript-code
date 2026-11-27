import { accounts } from "../data/seed.js";
import { Account } from "../src/Account.js";
import { Bank } from "../src/Bank.js";

const makeBank = () =>
  new Bank(
    "DemoBank",
    accounts.map((a) => new Account(a.id, a.customerId, a.balance)),
  );

// 1. Normal call: `this` is whatever is left of the dot
const bank = makeBank();
console.log(bank.transfer("ACC1001", "ACC1003", 1500));

// 2. Detached call: `this` is lost
const detached = bank.transfer;
try {
  detached("ACC1001", "ACC1003", 100);
} catch (e) {
  console.log(e.message);
}

// 3. Fix A: bind
const bound = bank.transfer.bind(bank);
console.log(bound("ACC1001", "ACC1003", 100));

// 4. Fix B: arrow wrapper (the React way)
const wrapped = (...args) => bank.transfer(...args);
console.log(wrapped("ACC1001", "ACC1003", 100));

// 5. Fix C: call / apply (invoke now, with an explicit `this`)
console.log(bank.transfer.call(bank, "ACC1001", "ACC1003", 100));

// 6. Fix D: arrow function as a class field
class AuditLog {
  entries = [];
  add = (msg) => this.entries.push(msg); // `this` fixed at creation
}
const log = new AuditLog();
const addDetached = log.add;
addDetached("deposit ok");
console.log(log.entries); // [ 'deposit ok' ]

// The cost of Fix D: it's an own property, not on the prototype
console.log(Object.hasOwn(log, "add")); // true
