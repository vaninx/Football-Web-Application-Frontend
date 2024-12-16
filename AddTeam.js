import React, { useState } from 'react';
import axios from 'axios';

const AddTeam = () => {
    let url= "http://localhost:5000/" 
    const [teamData, setTeamData] = useState({
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

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setTeamData({
            ...teamData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
       
        setMessage('');
        setError('');

        axios.post ( url +'add-team', teamData)
            .then((response) => {
                setMessage('Team added successfully!');
            })
            .catch((err) => {
                setError('Error adding team: ' + err.message);
            });
    };

    return (
        <div>
            <h1>Add a New Team</h1>
            <form onSubmit={handleSubmit}>
                {Object.keys(teamData).map((field) => (
                    <div key={field}>
                        <label>
                            {field}:
                            <input
                                type={field === 'Year' || field === 'team' ? 'text' : 'number'}
                                name={field}
                                value={teamData[field]}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                ))}
                <button type="submit">Add Team</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default AddTeam;
