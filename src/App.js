import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">
          Welcome to Your Dashboard
        </h1>
        <p className="dashboard-description">
          Your dashboard is now ready to use!
        </p>
        <div className="button-container">
          <button className="primary-button">
            Primary Button
          </button>
          <button className="secondary-button">
            Secondary Button
          </button>
        </div>
        <div className="success-message">
          <p className="success-text">
            ✅ Dashboard is working correctly!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
