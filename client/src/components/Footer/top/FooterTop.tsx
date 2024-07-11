import styles from './footer-top.module.scss';

export default function FooterTop() {
    return (
        <div className={styles.pageFooterTop}>
            <div className={styles.wrapper}>
                <div className={styles.pageFooterTopContainer}>
                    <div className={styles.pageFooterLogoContainer}>
                        <a href="/" className={styles.logoFooter}>
                            <img src="1.png" alt="logo" loading="lazy" width="200" height="80" />
                        </a>
                    </div>
                    {/* <span className={styles.certificate}>
                        <img
                            src="#"
                            alt="certificate for superbrand"
                            loading="lazy"
                            width="94"
                            height="94"
                        />
                    </span> */}
                    <div className={styles.pageFooterCtas}>
                        <ul className={styles.pageFooterCtasList}>
                            <li className={styles.pageFooterCtasItem}>
                                <a href="#" className={styles.pageFooterCTA} title="0888 888 888">
                                    <svg className={`${styles.icon} ${styles.icon_32}`}>
                                        <use xlinkHref="#" />
                                    </svg>
                                    <span> 0888 888 888 </span>
                                </a>
                            </li>
                            <li className={styles.pageFooterCtasItem}>
                                <a href="#" className={styles.pageFooterCTA} title="магазини">
                                    <svg className={`${styles.icon} ${styles.icon_32}`}>
                                        <use xlinkHref="#" />
                                    </svg>
                                    <span> магазини </span>
                                </a>
                            </li>
                            <li className={styles.pageFooterCtasItem}>
                                <a href="#" className={styles.pageFooterCTA} title="кариери">
                                    <span> кариери </span>
                                </a>
                            </li>
                            <li className={styles.pageFooterCtasItem}>
                                <a href="#" className={styles.pageFooterCTA} title="блог">
                                    <span> блог </span>
                                </a>
                            </li>
                            <li className={styles.pageFooterCtasItem}>
                                <a href="#" className={styles.pageFooterCTA} title="проверка на ваучер">
                                    <span> проверка на ваучер </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


