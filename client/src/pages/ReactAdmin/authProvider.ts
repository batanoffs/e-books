import { AuthProvider, HttpError } from 'react-admin';
import { authService } from '../../services/authService';

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        const email = username;

        try {
            const redirectUrl = await authService.login(email, password);
            console.log('redirectUrl', redirectUrl);
            if (!redirectUrl) {
                return Promise.reject(
                    new HttpError('Неоторизиран потребител', 401, {
                        message: 'Невалиден потребителско име или парола',
                    })
                );
            }
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(
                new HttpError('Неоторизиран потребител', 401, {
                    message: 'Грешка при влизане',
                })
            );
        }
    },
    logout: async () => {
        const { redirectUrl } = await authService.logout();
        return Promise.resolve(redirectUrl);
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            const existingToken = document.cookie
                .split(';')
                .map((cookie) => cookie.trim())
                .find((cookie) => cookie.startsWith('token='));
            if (existingToken) {
                document.cookie = `${existingToken};`;
            }
            return Promise.reject(
                new HttpError('Неоторизиран', status, {
                    message: 'Липсва токен',
                })
            );
        }
        // друг код на грешка (404, 500 и т.н.): не е необходимо да се излизва
        return Promise.resolve();
    },
    checkAuth: () => {
        const token = document.cookie
            .split(';')
            .map((cookie) => cookie.trim())
            .find((cookie) => cookie.startsWith('token='))
            ?.split('=')[1];
        return token
            ? Promise.resolve()
            : Promise.reject(new HttpError('Неоторизиран', 401, { message: 'Липсва токен' }));
    },
    getPermissions: () => {
        return Promise.resolve();
    },
};

export default authProvider;
