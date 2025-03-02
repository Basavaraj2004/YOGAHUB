import React from 'react';
import './Chart.css'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const chartData = [
  { name: 'Hatha Yoga', value: 25 },
  { name: 'Vinyasa Yoga', value: 30 },
  { name: 'Restorative Yoga', value: 20 },
  { name: 'Yin Yoga', value: 15 },
];

const COLORS = ['#FFB6C1', '#ADD8E6', '#98FB98', '#FFD700'];

const Charts = () => {
  const totalValue = chartData.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="charts-container">
      <h1 className="charts-header">Yoga Class Distribution</h1>
      <div className="charts-content">
        <div className="pie-chart-wrapper">
          <PieChart width={500} height={400}>
            <Pie 
              data={chartData} 
              dataKey="value" 
              nameKey="name" 
              outerRadius={150} 
              fill="#8884d8" 
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="stats">
          <h2 className="stats-title">Overall Statistics</h2>
          <ul className="stats-list">
            {chartData.map((entry, index) => (
              <li key={index} className="stats-item">
                <span className="stats-label">{entry.name}:</span>
                <span className="stats-value">{entry.value} ({((entry.value / totalValue) * 100).toFixed(2)}%)</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Charts;
