import React, {useState} from 'react';
import axios from 'axios';

const UpdateTeam = () => {
          const [formData, setFormData] = React.useState({
            team: '',
            games_played: 0,
            win: 0,
            draw: 0,
            loss: 0,
            goals_for: 0,
            goals_against: 0,
            points: 0,
            year: ''
          });
          const handleChange = e => {
                    setFormData({
                              ...formData, [e.target.name]: e.target.value
                    });
          };
          const handleSubmit = async (e) => {
                    e.preventDefault();
                    try {
                              await axios.put('http://localhost:5000/update', formData);
                              alert('Team updated successfully');
                    }catch (error) {
                              console.error("Error adding team:", error);
                    }  
          };
          return (
                    <form onSubmit={handleSubmit}>
                              <h2>Update Team</h2>
                              {Object.keys(formData).map(key => (
                                        <div key={key}>
                                                  <label>{key}</label>
                                                  <input
                                                            type="text"
                                                            name={key}
                                                            value={formData[key]}
                                                            onChange={handleChange}
                                                  />
                                        </div>
                              ))}
                              <button type="submit">Update Team</button>
                    </form>
          );
          };
          
          export default UpdateTeam;