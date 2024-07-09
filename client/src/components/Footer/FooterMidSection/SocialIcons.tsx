const SocialIcon = ({ href, title, extraClass = '', isImage = false, styles }) => (
    <li className={styles.pageFooterIconsItem}>
        <a href={href} title={title} target="_blank" rel="noopener" className={extraClass}>
            {isImage ? (
                <img
                    src=""
                    className={styles.icon}
                    alt={title}
                    width="22"
                    height="24"
                    loading="lazy"
                />
            ) : (
                <svg className={styles.icon}>
                    <use xlinkHref="" />
                </svg>
            )}
        </a>
    </li>
);

const SocialIcons = ({ styles }) => (
    <div className={styles.pageFooterMidBlock}>
        <div className={styles.pageFooterMidBlockItem}>
            <ul className={styles.pageFooterIconsPageFooterIconsSocial}>
                <SocialIcon styles={styles} href="" title="Facebook" />
                <SocialIcon styles={styles} href="" title="instagram" />
                <SocialIcon
                    styles={styles}
                    href=""
                    title="TikTok"
                    extraClass={styles.iconTiktok}
                    isImage={true}
                />
                <SocialIcon styles={styles} href="" title="blog" />
            </ul>
        </div>
    </div>
);

export default SocialIcons;
