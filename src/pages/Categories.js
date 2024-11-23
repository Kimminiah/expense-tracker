import React, { useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState(['Food', 'Transportation', 'Bills']);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
  };

  return (
    <div>
      <h1>Manage Categories</h1>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="Add a new category"
      />
      <button onClick={handleAddCategory}>Add</button>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category}{' '}
            <button onClick={() => handleDeleteCategory(category)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
