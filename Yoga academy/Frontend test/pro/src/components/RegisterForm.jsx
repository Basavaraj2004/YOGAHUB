import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterForm.css';
import video2 from '../assets/video2.mp4';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        if (event.target.value !== password) {
            setPasswordError('Passwords do not match');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare user data with state values
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        try {
            const response = await axios.post('http://localhost:8080/api/users/register', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Registration successful:', response.data);
            // Optionally navigate to another page
            navigate('/dashboard');
        } catch (error) {
            console.error('Error details:', {
                message: error.message,
                response: error.response ? error.response.data : 'No response data',
                request: error.request ? error.request : 'No request data'
            });
        }
    };

    return (
        <div id='RegisterBody'>
            <video autoPlay loop muted className="background-video">
                <source src={video2} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className="RegisterContainer">
                <h1 id='RegisterTitle'>REGISTER</h1>
                <hr />
                <br />
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type='text'
                            value={firstName}
                            placeholder='FIRST NAME'
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            value={lastName}
                            placeholder='LAST NAME'
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='email'
                            value={email}
                            placeholder='EMAIL (USER NAME)'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            value={password}
                            placeholder='PASSWORD'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            value={confirmPassword}
                            placeholder='RE-ENTER PASSWORD'
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    {passwordError && <p className="error">{passwordError}</p>}
                    <br />
                    <button type='submit'>REGISTER</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
