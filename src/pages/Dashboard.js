import React from 'react';
import ExpenseSummary from '../components/Dashboard/ExpenseSummary';
import CategoryOverview from '../components/Dashboard/CategoryOverview';
import './styles/dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-header">
      <h1>Dashboard</h1>
      <div className="summary-section">
        <div className="summary-card">
          <h2>Total Spending</h2>
          <p>$0.00</p>
        </div>
        <div className="summary-card">
          <h2>Remaining Balance</h2>
          <p>$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
