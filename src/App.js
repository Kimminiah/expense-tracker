import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Categories from './pages/Categories';
import Reports from './pages/Reports';
import Budgeting from './pages/Budgeting';
import ExpenseSummary from './pages/ExpenseSummary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/budgeting" element={<Budgeting />} />
        <Route path="/expensesummary" element={<ExpenseSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
