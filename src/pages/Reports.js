import React from 'react';
import { Bar } from 'react-chartjs-2';

const Reports = () => {
  // Example data for the chart
  const data = {
    labels: ['Food', 'Transportation', 'Bills', 'Entertainment', 'Others'], // Categories
    datasets: [
      {
        label: 'Expenses',
        data: [300, 150, 200, 100, 50], // Replace with dynamic data
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expense Breakdown by Category',
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
      <h1>Reports</h1>
      <p>Visual representation of your spending habits by category:</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Reports;
