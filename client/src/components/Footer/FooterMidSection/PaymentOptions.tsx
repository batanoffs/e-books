const PaymentOption = ({ text, styles, url }) => (
    <span className={styles.pageFooterIconsItem}>
        <svg className={`${styles.icon} ${styles.icon_32}`}>
            <use xlinkHref={url}></use>
        </svg>
        <span className={styles.pageFooterIconsText}> {text} </span>
    </span>
);

const PaymentIcon = ({ alt, styles, imgUrl }) => (
    <li className={styles.pageFooterIconsItem}>
        <img src={imgUrl} className={styles.pageFooterIconsImage} alt={alt} loading="lazy" />
    </li>
);

const PaymentOptions = ({ styles }) => (
    <div className={styles.pageFooterMidBlock}>
        <div className={styles.pageFooterMidBlockItem}>
            <div className={`${styles.pageFooterIcons} ${styles.pageFooterIconsText}`}>
                <PaymentOption url="" styles={styles} text="Банков превод" />
                <PaymentOption url="" styles={styles} text="Наложен платеж" />
            </div>
        </div>
        <div className={styles.pageFooterMidBlockItem}>
            <ul className={`${styles.pageFooterIcons} ${styles.pageFooterIconsPayments}`}>
                <PaymentIcon styles={styles} imgUrl="" alt="Visa" />
                <PaymentIcon styles={styles} imgUrl="" alt="Mastercard" />
                <PaymentIcon styles={styles} imgUrl="" alt="Easypay" />
                <PaymentIcon styles={styles} imgUrl="" alt="Epay.bg" />
                <PaymentIcon styles={styles} imgUrl="" alt="Paypal" />
            </ul>
        </div>
    </div>
);

export default PaymentOptions;
