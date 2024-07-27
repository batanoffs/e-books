import axios from 'axios';
import { API } from '../utils/constants/api';

const login = async (email: string, password: string) => {
    if (!email || !password) {
        throw new Error('Имейл и парола са задъжителни');
    }
    try {
        const response = await axios.post(API.LOGIN, { email, password });
        const { token, redirectUrl, message } = response.data;
        console.log('response-data', response.data);
        
        // Check if there is an existing token
        const currentToken = document.cookie
            .split(';')
            .map((cookie) => cookie.trim())
            .find((cookie) => cookie.startsWith('token='))
            ?.split('=')[1];

        // Save the new token only if it's different from the current one
        if (currentToken !== token) {
            document.cookie = `token=${token};`;
            console.log('Token updated successfully.');
        } else {
            console.warn('Token is already up to date. Skipping...');
        }
        return { redirectUrl, message };
    } catch (error) {
        // Handle login error
        throw new Error('Login failed');
    }
};

const register = async (credentials: {
    email: string;
    password: string;
    repass: string;
    role: string;
}) => {
    if (!credentials.email || !credentials.password) {
        throw new Error('Email and password are required');
    }
    try {
        const response = await axios.post(API.REGISTER, credentials);
        console.log('response-data', response.data);
        return response.data;
    } catch (error) {
        console.error('Registration failed', error);
    }
};

const logout = async () => {
    try {
        const response = await axios.get(API.LOGOUT);
        const { redirectUrl, message } = response.data;
        // Clear token from cookies or local storage
        document.cookie = 'token=;';
        return { redirectUrl, message };
    } catch (error) {
        // Handle logout error
        throw new Error('Logout failed');
    }
};

export const authService = {
    login,
    register,
    logout,
};