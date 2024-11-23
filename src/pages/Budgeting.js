import React, { useState } from 'react';

const Budgeting = () => {
  const [category, setCategory] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');
  const [currentSpending, setCurrentSpending] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleBudgetAmountChange = (e) => {
    setBudgetAmount(e.target.value);
  };

  const handleCurrentSpendingChange = (e) => {
    setCurrentSpending(e.target.value);
  };

  const calculateRemaining = () => {
    return budgetAmount - currentSpending;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save budget data goes here (e.g., updating state or saving to a database)
    alert(`Budget for ${category} set to $${budgetAmount}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Set Your Budget</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Category:
            <input
              type="text"
              value={category}
              onChange={handleCategoryChange}
              placeholder="Enter Category (e.g., Food)"
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Budget Amount:
            <input
              type="number"
              value={budgetAmount}
              onChange={handleBudgetAmountChange}
              placeholder="Enter Budget"
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Current Spending:
            <input
              type="number"
              value={currentSpending}
              onChange={handleCurrentSpendingChange}
              placeholder="Enter Current Spending"
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff' }}>
            Save Budget
          </button>
        </div>
      </form>

      <div style={{ marginTop: '20px', padding: '10px', background: '#f8f9fa' }}>
        <h2>Budget Summary</h2>
        <p>Category: {category}</p>
        <p>Budget Amount: ${budgetAmount}</p>
        <p>Current Spending: ${currentSpending}</p>
        <p>Remaining: ${calculateRemaining()}</p>
      </div>
    </div>
  );
};

export default Budgeting;
