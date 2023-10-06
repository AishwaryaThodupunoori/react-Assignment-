import React, { useState, useEffect } from 'react';
import { fetchTransactionData } from './transactions';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [customerRewards, setCustomerRewards] = useState({});

  useEffect(() => {
    fetchTransactionData().then((data) => {
      setTransactions(data);
    });
  }, []);

  useEffect(() => {
    // Calculate customer rewards
    const calculateCustomerRewards = () => {
      const rewards = {};

      transactions.forEach((transaction) => {
        const { customerId, amount, month } = transaction;
        let points = 0;

        if (amount > 100) {
          points = (amount - 100) * 2 + 50;
        } else if (amount > 50) {
          points = amount - 50;
        }

        if (points > 0) {
          if (!rewards[customerId]) {
            rewards[customerId] = { total: 0 };
          }

          if (!rewards[customerId][month]) {
            rewards[customerId][month] = 0;
          }

          rewards[customerId][month] += points;
          rewards[customerId].total += points;
        }
      });

      setCustomerRewards(rewards);
    };

    calculateCustomerRewards();
  }, [transactions]);

  return (
    <div>
      <h1>Rewards Points Calculator</h1>
      <div>
        <h2>Customer Rewards Points</h2>
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>Mar</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(customerRewards).map((customerId) => (
              <tr key={customerId}>
                <td>{customerId}</td>
                <td>{customerRewards[customerId].Jan || 0}</td>
                <td>{customerRewards[customerId].Feb || 0}</td>
                <td>{customerRewards[customerId].Mar || 0}</td>
                <td>{customerRewards[customerId].total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
