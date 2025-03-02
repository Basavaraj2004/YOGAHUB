import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './HelpEmail.module.css'; // Import the CSS module

const HelpEmail = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            await axios.post(`http://localhost:8080/forgotPassword/verifyMail/${email}`);
            navigate('/otp', { state: { email } }); // Pass the email via router state
        } catch (error) {
            setError(error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Enter your email to receive an OTP</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Submit</button>
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
};

export default HelpEmail;
