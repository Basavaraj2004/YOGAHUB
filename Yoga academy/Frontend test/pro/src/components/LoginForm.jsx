import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginForm.css';
import video2 from '../assets/video2.mp4';
import { AppContext } from '../context/AppContext';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(AppContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8080/api/users/login',
                { email: username, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            setUser(response.data);
            toast.success('Logged in successfully!', { position: 'top-center' });

            // Delay navigation to allow the toast to display
            setTimeout(() => navigate('/dashboard'), 1500); // 1.5 seconds delay
            
            setUsername('');
            setPassword('');
        } catch (error) {
            console.log(error);
            toast.error('Invalid credentials', { position: 'top-center' });
        }
    };

    return (
        <div id='LoginBody'>
            <video autoPlay loop muted className="background-video">
                <source src={video2} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className='LoginContainer'>
                <h1 id='LoginTitle'>LOGIN</h1>
                <hr />
                <br />
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type='text'
                            value={username}
                            placeholder='EMAIL'
                            onChange={(e) => setUsername(e.target.value)}
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
                    <br />
                    <button type='submit'>LOGIN</button>
                    <p className='Sign-up'>Don't have an Account? &nbsp;
                        <Link to="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginForm;
