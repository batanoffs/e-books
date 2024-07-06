import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { API } from '../../constants/api';

import styles from './login-page.module.css';

const cookieOptions: Record<string, boolean | number | string> = {
    // Set the "SameSite=None" and "Secure" attributes
    sameSite: 'None',
    secure: true,
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/', // default path
};

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(API.LOGIN, { email, password });

            document.cookie = `token=${response.data.token}; ${Object.entries(cookieOptions)
                .map(([key, value]) => `${key}=${value}`)
                .join('; ')}`; // Set the cookie with the options

            navigate(response.data.redirectUrl);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleLogin}>
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
