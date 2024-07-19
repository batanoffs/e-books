import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from '@mui/material';

import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './login-page.module.scss';
import { useLoginModal } from '../../store/helperModal';
import { authService } from '../../services/authService';

const LoginModal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const open = useLoginModal((state) => state.open);
    const toggleOpen = useLoginModal((state) => state.toggleOpen);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const { redirectUrl, message } = await authService.login(email, password);

        toggleOpen();
        navigate(redirectUrl);
        console.log(message, redirectUrl);
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
                    <Link href="/register" underline="hover" variant="inherit">
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
