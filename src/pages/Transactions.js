import React from 'react';
import './styles/transactions.css';

const Transactions = () => {
  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <h2>Transaction History</h2>
        <button className="button">Add Transaction</button>
      </div>
      <div className="transaction-item">
        <div className="details">
          <p>Groceries</p>
          <small>March 23, 2024</small>
        </div>
        <div className="amount">-$50.00</div>
      </div>
    </div>
  );
};

export default Transactions;