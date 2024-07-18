import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import { useTermsModal, usePrivacyModal } from '../../store/helperModal';
import { PrivacyRulesModal } from './PrivacyRulesModal';
import { GeneralRulesModal } from './GeneralRulesModal';

import styles from './register.module.scss';

type Inputs = {
    email: string;
    password: string;
    generalConditions: boolean;
    privacyPolicy: boolean;
    newsletter: boolean;
};

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const toggleOpenTerms = useTermsModal((state) => state.toggleOpen);
    const toggleOpenPrivacy = usePrivacyModal((state) => state.toggleOpen);

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            await axios.post('/api/register', data);
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
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.field} style={{ marginBottom: '20px' }}>
                    <label htmlFor="email">
                        <span>Имейл</span>
                    </label>
                    <input type="email" id="email" {...register('email', { required: true })} />
                    {errors.email && <span className={styles.error}>Полето е задължително</span>}
                </div>
                <div className={styles.field}>
                    <label htmlFor="password">
                        <span>Парола</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { required: true })}
                    />
                    {errors.password && <span className={styles.error}>Полето е задължително</span>}
                </div>
                <div className={styles.checkboxContainer}>
                    <div className={styles.field}>
                        <label htmlFor="generalConditions">
                            <input
                                type="checkbox"
                                id="generalConditions"
                                {...register('generalConditions', { required: true })}
                            />
                            <span style={{ color: 'red', fontSize: '20px' }}>*</span>
                            Запознах се с
                            <a className={styles.buttonModal} onClick={toggleOpenTerms}>
                                Общите условия
                            </a>
                            и ги приемам
                        </label>
                        {errors.generalConditions && (
                            <span className={styles.error}>Полето е задължително</span>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="privacyPolicy">
                            <input
                                type="checkbox"
                                id="privacyPolicy"
                                {...register('privacyPolicy', { required: true })}
                            />
                            <span style={{ color: 'red', fontSize: '20px' }}>*</span>
                            Съгласен съм с
                            <a className={styles.buttonModal} onClick={toggleOpenPrivacy}>
                                Политиката за защита на личните данни
                            </a>
                        </label>
                        {errors.privacyPolicy && (
                            <span className={styles.error}>Полето е задължително</span>
                        )}
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="newsletter">
                            <input type="checkbox" id="newsletter" {...register('newsletter')} />
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
