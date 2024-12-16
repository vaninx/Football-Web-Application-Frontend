import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopTeams = () => {
          const [teams, setTeams] = useState([]);
          const [error, setError] = useState('');

          useEffect(() => {
                    // Fetch the top teams when the component loads
                    axios.get('http://localhost:5000/top-teams')
                              .then((response) => {
                                        setTeams(response.data); // Save the data to state
                              })
                              .catch((err) => {
                                        setError('Error fetching top teams: ' + err.message);
                              });
          }, []); // Empty dependency array ensures this runs once

          return (
                    <div>
                              <h1>Top 10 Teams by Wins</h1>
                              {error && <p style={{ color: 'red' }}>{error}</p>}
                              <table border="1">
                                        <thead>
                                                  <tr>
                                                            <th>Team</th>
                                                            <th>Games Played</th>
                                                            <th>Wins</th>
                                                            <th>Draws</th>
                                                            <th>Losses</th>
                                                            <th>Goals For</th>
                                                            <th>Goals Against</th>
                                                            <th>Points</th>
                                                  </tr>
                                        </thead>
                                        <tbody>
                                                  {teams.map((team, index) => (
                                                            <tr key={index}>
                                                                      <td>{team.team}</td>
                                                                      <td>{team.games_played}</td>
                                                                      <td>{team.win}</td>
                                                                      <td>{team.draw}</td>
                                                                      <td>{team.loss}</td>
                                                                      <td>{team.goals_for}</td>
                                                                      <td>{team.goals_against}</td>
                                                                      <td>{team.points}</td>
                                                            </tr>
                                                  ))}
                                        </tbody>
                              </table>
                    </div>
          );
};

export default TopTeams;
