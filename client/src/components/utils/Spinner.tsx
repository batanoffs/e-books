import styles from './spinner.module.scss'

const Spinner = () => {
    return (
        <div className={styles.loading}>
            <h1>Зареждане на садържание...</h1>
            <div className={styles.spinner} />
        </div>
    );
};

export default Spinner;