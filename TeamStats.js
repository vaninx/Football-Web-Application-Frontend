import React, { useState } from 'react';
import axios from 'axios';

const TeamStats = () => {
          const [year, setYear] = useState('');
          const [stats, setStats] = useState(null);
          const[error, setError] = useState('');

          const fetchStats = async () => {
                    try {
                              const response = await axios.get(`http://localhost:5000/stats/${year}`);
                              setStats(response.data);
                              setError('');
                    } catch (error) {
                              setError('Error fetching stats: ' + error.message);
                              setStats(null);
                    }
          };

          return (
                    <div>
                              <h2>Team Stats for a Given Year</h2>
            <input
                type="text"
                placeholder="Enter Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <button onClick={fetchStats}>Get Stats</button>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error if there is one */}
            {stats && (
                <div>
                    <h3>Stats for {year}</h3>
                    <p>Games Played: {stats.totalGamesPlayed}</p>
                    <p>Wins: {stats.totalWins}</p>
                    <p>Draws: {stats.totalDraws}</p>
                </div>
            )}
                    </div>
          );
};

export default TeamStats;