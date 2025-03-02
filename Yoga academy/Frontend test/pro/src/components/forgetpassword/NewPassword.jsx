import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from './NewPassword.module.css'; // Import the CSS module

const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null); // State for error handling
    const [success, setSuccess] = useState(null); // State for success handling
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email; // Retrieve the email from router state

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            // Sending the new password to the backend for the given email
            const response = await axios.post(
                `http://localhost:8080/forgotPassword/changePassword/${email}`,
                { password, repeatPassword: confirmPassword } // Request body containing new password
            );

            if (response.status === 200) {
                setSuccess('Password updated successfully! Redirecting to login...');
                setTimeout(() => {
                    navigate('/login');
                }, 2000); // Redirect after 2 seconds
            } else {
                setError('Failed to update password. Please try again.');
            }
        } catch (error) {
            setError(error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Set a new password</h2>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter new password"
                    required
                />
                <button type="submit">Submit</button>
                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>{success}</p>}
            </form>
        </div>
    );
};

export default NewPassword;
