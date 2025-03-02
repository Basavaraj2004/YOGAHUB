import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from './Otp.module.css'; // Import the CSS module

const Otp = () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email; // Retrieve the email from router state

    const handleVerifyOtp = async (event) => {
        event.preventDefault();

        try {
            await axios.post(`http://localhost:8080/forgotPassword/verifyOtp/${otp}/${email}`);
            navigate('/newpassword');
        } catch (error) {
            alert(error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleVerifyOtp}>
                <h2>Enter the OTP sent to your email</h2>
                <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    required
                />
                <button type="submit">Verify OTP</button>
            </form>
        </div>
    );
};

export default Otp;
