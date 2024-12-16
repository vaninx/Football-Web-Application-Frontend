import React, { useState } from 'react';
import axios from 'axios';

const AvgGoals = () => {
  const [year, setYear] = useState('');
  const [avgGoals, setAvgGoals] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(''); // Clear any previous error
    setAvgGoals(null); // Clear previous results

    if (!year || year < 0) {
      setError('Please enter a valid year.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/avg-goals/${year}`);
      // Make sure we have a value before setting
      if (response.data.Average && response.data.Average.length > 0) {
        // Calculate the average goals
        const avg = response.data.Average[0].avg_goals_for || 0;
        setAvgGoals(avg);
      } else {
        setAvgGoals(0); // Set to 0 if no data
      }
    } catch (err) {
      setError('Error fetching average goals: ' + (err.response?.statusText || err.message));
    }
  };

  return (
    <div>
      <h1>Average Goals Scored</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Year: <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required/>
        </label>
        <button type="submit">Get Average Goals</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* Check if avgGoals is set and display it */}
      {avgGoals !== null && (
        <p>
          The average goals scored in {year} is <strong>{avgGoals.toFixed(2)}</strong>.
        </p>
      )}
    </div>
  );
};

export default AvgGoals;
