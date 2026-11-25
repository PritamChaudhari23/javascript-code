export const customers = [
  { id: "C1", name: "Alice Sharma", email: "alice@example.com" },
  { id: "C2", name: "Bob Patil", email: "bob@example.com" },
  { id: "C3", name: "Carol Joshi", email: "carol@example.com" },
  { id: "C4", name: "Dev Kulkarni", email: "dev@example.com" },
];

export const accounts = [
  {
    id: "ACC1001",
    customerId: "C1",
    type: "savings",
    balance: 5000,
    minBalance: 1000,
  },
  {
    id: "ACC1002",
    customerId: "C1",
    type: "current",
    balance: 800,
    overdraftLimit: 500,
  },
  {
    id: "ACC1003",
    customerId: "C2",
    type: "current",
    balance: 200,
    overdraftLimit: 500,
  },
  {
    id: "ACC1004",
    customerId: "C3",
    type: "savings",
    balance: 12000,
    minBalance: 2000,
  },
  {
    id: "ACC1005",
    customerId: "C3",
    type: "current",
    balance: 0,
    overdraftLimit: 1000,
  },
  {
    id: "ACC1006",
    customerId: "C4",
    type: "savings",
    balance: 1500,
    minBalance: 1000,
  },
];

export const transactions = [
  {
    id: "T1",
    accountId: "ACC1001",
    type: "deposit",
    amount: 2000,
    date: "2026-11-01",
  },
  {
    id: "T2",
    accountId: "ACC1003",
    type: "withdrawal",
    amount: 100,
    date: "2026-11-03",
  },
  {
    id: "T3",
    accountId: "ACC1004",
    type: "deposit",
    amount: 5000,
    date: "2026-11-05",
  },
];
