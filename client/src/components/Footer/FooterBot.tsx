import styles from './footer-bottom.module.scss';

export default function FooterBot() {
    return (
        <div className={styles.pageFooterBot}>
            <div className={styles.wrapper}>
                <div className={styles.pageFooterBotBlock}>
                    <div className={`${styles.pageFooterBotItem} ${styles.pageFooterBotItemLarge}`}>
                        <span className={styles.copyright}>
                            Книжарница „Нов живот“ е запазена марка на книжарница АД, BG
                        </span>
                        <span className={styles.copyright}>2024 © Нов живот. Всички права запазени.</span>
                    </div>
                    <div className={styles.pageFooterBotItem}>
                        <span className={styles.copyright}>
                            <span>Дизайн и програмиране от </span>
                            <a
                                href="https://danielbatanov.netlify.app/"
                                title="Batanoffs"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img width="59" height="12" src="" alt="Batanoffs" />
                                <span className={styles.visuallyHidden}>Batanoffs</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

