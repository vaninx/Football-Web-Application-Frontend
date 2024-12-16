import React, { useState } from 'react';
import axios from 'axios';

const DeleteTeam = () => {
          const [team, setTeam] = useState('');

          const handleSubmit = async (e) => {
                    e.preventDefault();
                    try {
                              await axios.post('http://localhost:5000/delete', { team: team });
                              alert("Team deleted successfully!");
                    } catch (error) {
                              console.error("Error deleting team", error);
                    }
          };

          return (
                    <form onSubmit={handleSubmit}>
                              <h2>Delete Team</h2>
                              <label>Team:</label>
                              <input
                                        type="text"
                                        value={team}
                                        onChange={(e) => setTeam(e.target.value)}
                              />
                              <button type="submit">Delete Team</button>
                    </form>
          );
};

export default DeleteTeam;