// src/AdminValidationForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '../authSlice';
import './AdminValidationForm.css';

const AdminValidationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector(state => state.auth.error);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin@gmail.com' && password === '123') {
            dispatch(loginSuccess());
            alert('Welcome Admin!');
            navigate('/admin');
        } else {
            dispatch(loginFailure('Invalid credentials. Access denied.'));
        }
    };

    return (
        <div className="admin-validation-container">
            <div className="login-box">
                <h1 className="login-title">Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="submit-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminValidationForm;
