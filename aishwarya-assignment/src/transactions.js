const transactions = [
  { customerId: '1', amount: 120, month: 'Jan' },
  { customerId: '1', amount: 75, month: 'Feb' },
  { customerId: '2', amount: 200, month: 'Feb' },
  { customerId: '2', amount: 150, month: 'Mar' },
  { customerId: '3', amount: 100, month: 'Jan' },
  { customerId: '3', amount: 30, month: 'Mar' },
  { customerId: '4', amount: 75, month: 'Jan' },
  { customerId: '4', amount: 115, month: 'Mar' },
  { customerId: '4', amount: 100, month: 'Feb' },
  { customerId: '4', amount: 105, month: 'Jan' },
  { customerId: '5', amount: 185, month: 'Feb' },
  { customerId: '5', amount: 88, month: 'Feb' },
  { customerId: '6', amount: 100, month: 'Mar' },
  { customerId: '7', amount: 65, month: 'Jan' },
  { customerId: '7', amount: 100, month: 'Jan' },
  { customerId: '7', amount: 30, month: 'Jan' },
  // Add more transactions as needed
];

export function fetchTransactionData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(transactions);
    }, 1000);
  });
}
