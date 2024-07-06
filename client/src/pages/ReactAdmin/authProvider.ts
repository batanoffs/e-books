import axios from 'axios';
import { AuthProvider, HttpError } from 'react-admin';
import { API } from '../../constants/api';

const cookieOptions: Record<string, boolean | number | string> = {
    // Set the "SameSite=None" and "Secure" attributes
    sameSite: 'None',
    secure: true,
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/', // default path
};

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        // const user = data.users.find((u) => u.username === username && u.password === password);
        const email = username;
        try {
            const response = await axios.post(API.LOGIN, { email, password });
            console.log('user', response);
            const userData = response.data;

            if (response) {
                // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
                let { password, ...userToPersist } = userData;
                localStorage.setItem('user', JSON.stringify(userToPersist));

                document.cookie = `token=${response.data.token}; ${Object.entries(cookieOptions)
                    .map(([key, value]) => `${key}=${value}`)
                    .join('; ')}`; // Set the cookie with the options
                return Promise.resolve();
            }

            return Promise.reject(
                new HttpError('Unauthorized', 401, {
                    message: 'Invalid username or password',
                })
            );
        } catch (error) {
            return Promise.reject(
                new HttpError('Unauthorized', 401, {
                    message: 'Error while logging in',
                })
            );
        }
    },
    logout: () => {
        localStorage.removeItem('user');
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () => (localStorage.getItem('user') ? Promise.resolve() : Promise.reject()),
    getPermissions: () => {
        return Promise.resolve(undefined);
    },
    getIdentity: () => {
        const persistedUser = localStorage.getItem('user');
        const user = persistedUser ? JSON.parse(persistedUser) : null;

        return Promise.resolve(user);
    },
};

export default authProvider;
