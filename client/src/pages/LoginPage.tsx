import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './login-page.module.css';
import { API } from '../constants/api';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            console.log('email and password', email, password);

            const response = await axios.post(API.LOGIN, { email, password });

            console.log(response.data);

            document.cookie = `token=${response.data.token}`;
            if (response.data.role === 'admin') {
                navigate('/admin/dashboard');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label>Имейл</label>
                <input
                    className={styles.input}
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Парола</label>
                <input
                    className={styles.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button className={styles.button} type="submit">
                Login
            </button>
        </form>
    );
};

export default LoginPage;
