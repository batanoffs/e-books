import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Link } from '@mui/material';
import { API } from '../../constants/api';

import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './login-page.module.scss';
import { useLoginModal } from '../../store/helperModal';

const LoginModal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const open = useLoginModal((state) => state.open);
    const toggleOpen = useLoginModal((state) => state.toggleOpen);

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (!email || !password) {
                throw new Error('Имейл и парола са задъжителни');
            }

            const response = await axios.post(API.LOGIN, { email, password });

            if (response.data.redirectUrl.includes('admin')) {
                return navigate('/admin/dashboard');
            }

            document.cookie = `token=${response.data.token}; ${Object.entries(cookieOptions)
                .map(([key, value]) => `${key}=${value}`)
                .join('; ')}`; // Set the cookie with the options

            navigate(response.data.redirectUrl);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <Modal
            open={open}
            onClose={toggleOpen}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={styles.paper}>
                <Typography variant="subtitle2" id="modal-title">
                    Вход
                </Typography>
                <form className={styles.form} onSubmit={handleLogin}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Имейл"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Парола"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={styles.button}
                    >
                        Вход
                    </Button>
                    <Link href="/registracia" underline="hover" variant="inherit">
                        Нямаш акаунт? Регистрирай се.
                    </Link>
                    <Link href="/zabravena-parola" underline="hover">
                        Забравена парола?
                    </Link>
                </form>
            </div>
        </Modal>
    );
};

export default LoginModal;
