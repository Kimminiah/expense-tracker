import React from 'react';
import './styles/category-overview.css';

const CategoryOverview = () => {
  return (
    <div className="category-overview">
      <h2>Expenses by Category</h2>
      <div className="category-item">
        <div className="name">Food</div>
        <div className="total">$120.00</div>
      </div>
    </div>
  );
};

export default CategoryOverview;
