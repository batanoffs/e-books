import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import styles from './register.module.scss';
import { useTermsModal, usePrivacyModal } from '../../store/helperModal';
import { PrivacyRulesModal } from './PrivacyRulesModal';
import { GeneralRulesModal } from './GeneralRulesModal';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkboxes, setCheckboxes] = useState({
        generalConditions: false,
        privacyPolicy: false,
        newsletter: false,
    });

    const toggleOpenTerms = useTermsModal((state) => state.toggleOpen);
    const toggleOpenPrivacy = usePrivacyModal((state) => state.toggleOpen);

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/api/register', { email, password, ...checkboxes });
            navigate('/login');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    const handleFacebookLogin = async () => {
        try {
            const response = await axios.post('/api/auth/facebook');
            const { token } = response.data;
            document.cookie = `token=${token}; Max-Age=31536000; Path=/`;
            navigate('/');
        } catch (error) {
            console.error('Facebook login failed', error);
        }
    };

    return (
        <div className={styles.paper}>
            <GeneralRulesModal styles={styles} />
            <PrivacyRulesModal styles={styles} />
            <h2>Създай нов профил</h2>
            <p>
                Чрез създаване на профил в нашия магазин, ще можете да пазарувате по-бързо, да
                следите своите поръчки и доставки и още допълнителни опции
            </p>

            <button className={styles.facebook} onClick={handleFacebookLogin}>
                <FacebookOutlinedIcon /> Вход с Facebook
            </button>

            <p className={styles.or}>Или</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor="email">Имейл</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="password">Парола</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.checkboxContainer}>
                    <div className={styles.field}>
                        <label htmlFor="generalConditions">
                            <input
                                type="checkbox"
                                id="generalConditions"
                                checked={checkboxes.generalConditions}
                                onChange={(e) =>
                                    setCheckboxes({
                                        ...checkboxes,
                                        generalConditions: e.target.checked,
                                    })
                                }
                            />
                            Запознах се с
                            <a className={styles.buttonModal} onClick={toggleOpenTerms}>
                                Общите условия
                            </a>
                            и ги приемам
                        </label>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="privacyPolicy">
                            <input
                                type="checkbox"
                                id="privacyPolicy"
                                checked={checkboxes.privacyPolicy}
                                onChange={(e) =>
                                    setCheckboxes({
                                        ...checkboxes,
                                        privacyPolicy: e.target.checked,
                                    })
                                }
                            />
                            Съгласен съм с
                            <a className={styles.buttonModal} onClick={toggleOpenPrivacy}>
                                Политиката за защита на личните данни
                            </a>
                        </label>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="newsletter">
                            <input
                                type="checkbox"
                                id="newsletter"
                                checked={checkboxes.newsletter}
                                onChange={(e) =>
                                    setCheckboxes({
                                        ...checkboxes,
                                        newsletter: e.target.checked,
                                    })
                                }
                            />
                            Желая да получавам на e-mail електронен бюлетин от ORANGE CENTER,
                            включващ новини, промоции и друга актуална информация
                        </label>
                    </div>
                </div>

                <button type="submit" className={styles.button}>
                    Регистрация
                </button>
            </form>
        </div>
    );
};

export default Register;
