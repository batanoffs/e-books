import { useNavigate } from 'react-router-dom';
import styles from './404.module.scss';
const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const retry = () => {
        window.location.reload();
    };

    return (
        <div className={styles.container}>
            <h1>Страницата не е намерена (404)</h1>
            <div>
                <button onClick={goBack}>Върни се назад</button>
                <button onClick={retry}>Опитай отново</button>
            </div>
        </div>
    );
};

export default NotFoundPage;

