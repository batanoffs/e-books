import styles from './footer-mid.module.scss';

export default function FooterMid() {
    return (
        <div className={styles.pageFooterMid}>
            <div className={styles.wrapper}>
                <div className={styles.pageFooterMidCont}>
                    <div className={styles.pageFooterMidItemSmall}>
                        <div className={styles.pageFooterTitle}>Категории с продукти</div>
                        <div className={styles.pageFooterListCont}>
                            <input
                                className={styles.pageFooterToggleControl}
                                type="checkbox"
                                name="footer-cat-toggle"
                                id="footer-cat-toggle"
                            />
                            <div
                                data-content-type="row"
                                data-appearance="contained"
                                data-element="main"
                            >
                                <div
                                    data-enable-parallax="0"
                                    data-parallax-speed="0.5"
                                    data-background-images="{}"
                                    data-background-type="image"
                                    data-video-loop="true"
                                    data-video-play-only-visible="true"
                                    data-video-lazy-load="true"
                                    data-video-fallback-src=""
                                    data-element="inner"
                                    className={styles.categoryWrapper}
                                >
                                    <div
                                        data-content-type="html"
                                        data-appearance="default"
                                        data-element="main"
                                        data-decoded="true"
                                        className={styles.categories}
                                    >
                                        <ul className={styles.pageFooterList}>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href="/knizharnitsa"
                                                    className={styles.link}
                                                    title="Книжарница"
                                                >
                                                    <span>Книжарница</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href="/za-uchilishte"
                                                    className={styles.link}
                                                    title="За училище"
                                                >
                                                    <span>За училище</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href="/kantselarski-materiali"
                                                    className={styles.link}
                                                    title="Канцеларски материали"
                                                >
                                                    <span>Канцеларски материали</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href="/hobi-i-nastolni-igri"
                                                    className={styles.link}
                                                    title="Хоби и настолни игри"
                                                >
                                                    <span>Хоби и настолни игри</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href="/igri-i-igrachki"
                                                    className={styles.link}
                                                    title="Игри и играчки"
                                                >
                                                    <span>Игри и играчки</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href="/gifts"
                                                    className={styles.link}
                                                    title="Подаръци"
                                                >
                                                    <span>Подаръци</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href="/muzika-i-filmi"
                                                    className={styles.link}
                                                    title="Музика и филми"
                                                >
                                                    <span>Музика и филми</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <label htmlFor="footer-cat-toggle" className={styles.pageFooterToggle}>
                                <span className={styles.pageFooterToggleLabelDown}>Виж повече</span>
                                <span className={styles.pageFooterToggleLabelUp}>
                                    Виж по - малко
                                </span>
                                <svg className={styles.icon}>
                                    <use xlinkHref="" />
                                </svg>
                            </label>
                        </div>
                        <div className={styles.pageFooterMidBlock}>
                            <div className={styles.pageFooterMidBlockItem}>
                                <ul className={styles.pageFooterIconsPageFooterIconsSocial}>
                                    <li className={styles.pageFooterIconsItem}>
                                        <a href="" title="Facebook" target="_blank" rel="noopener">
                                            <svg className={styles.icon}>
                                                <use xlinkHref="" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className={styles.pageFooterIconsItem}>
                                        <a
                                            href="http://instagram.com/Нов Живот_center"
                                            title="instagram"
                                            rel="noopener"
                                            target="_blank"
                                        >
                                            <svg className={styles.icon}>
                                                <use xlinkHref="" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className={styles.pageFooterIconsItem}>
                                        <a
                                            href=""
                                            title="TikTok"
                                            rel="noopener"
                                            target="_blank"
                                            className={styles.iconTiktok}
                                        >
                                            <img
                                                src=""
                                                className={styles.icon}
                                                alt="TikTok"
                                                width="22"
                                                height="24"
                                                loading="lazy"
                                            />
                                        </a>
                                    </li>
                                    <li className={styles.pageFooterIconsItem}>
                                        <a href="" title="blog" rel="noopener" target="_blank">
                                            <svg className={styles.icon}>
                                                <use xlinkHref="" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.pageFooterMidItem}>
                        <div className={styles.pageFooterTitle}>Книжарница "Нов живот"</div>
                        <div className={styles.pageFooterListCont}>
                            <input
                                className={styles.pageFooterToggleControl}
                                type="checkbox"
                                name="footer-cat-toggle-2"
                                id="footer-cat-toggle-2"
                            />
                            <div
                                data-content-type="row"
                                data-appearance="contained"
                                data-element="main"
                            >
                                <div
                                    data-enable-parallax="0"
                                    data-parallax-speed="0.5"
                                    data-background-images="{}"
                                    data-background-type="image"
                                    data-video-loop="true"
                                    data-video-play-only-visible="true"
                                    data-video-lazy-load="true"
                                    data-video-fallback-src=""
                                    data-element="inner"
                                    className={styles.companyItemsWrapper}
                                >
                                    <div
                                        className={styles.companyItems}
                                        data-content-type="html"
                                        data-appearance="default"
                                        data-element="main"
                                        data-decoded="true"
                                    >
                                        <ul className={styles.pageFooterList}>
                                            <li className={styles.pageFooterItem}>
                                                <a href="" className={styles.link} title="За нас">
                                                    <span>За нас</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href=""
                                                    className={styles.link}
                                                    title="Цени и срокове за доставка"
                                                >
                                                    <span>Цени и срокове за доставка</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href=""
                                                    className={styles.link}
                                                    title="Политика за поверителност"
                                                >
                                                    <span>Политика за поверителност</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a href="" className={styles.link} title="Кариери">
                                                    <span>Кариери</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href=""
                                                    className={styles.link}
                                                    title="Връщане и замяна на стока"
                                                >
                                                    <span>Връщане и замяна на стока</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href="#"
                                                    className={styles.link}
                                                    title="Настройки за поверителност"
                                                    data-amcookie-js="footer-link"
                                                >
                                                    <span>Настройки за поверителност</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href=""
                                                    className={styles.link}
                                                    title="Реклама в Нов Живот"
                                                >
                                                    <span>Реклама в Нов Живот</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href=""
                                                    className={styles.link}
                                                    title="Онлайн решаване на спорове"
                                                >
                                                    <span>Онлайн решаване на спорове</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href=""
                                                    className={styles.link}
                                                    title="Свържи се с нас"
                                                >
                                                    <span>Свържи се с нас</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href=""
                                                    className={styles.link}
                                                    title="Общи условия"
                                                >
                                                    <span>Общи условия</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href=""
                                                    className={styles.link}
                                                    title="Често задавани въпроси"
                                                >
                                                    <span>Често задавани въпроси</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href=""
                                                    className={styles.link}
                                                    title="Магазини Нов Живот center"
                                                >
                                                    <span>Магазини Нов Живот center</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href=""
                                                    className={styles.link}
                                                    title="Начин на плащане"
                                                >
                                                    <span>Начин на плащане</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a
                                                    href=""
                                                    className={styles.link}
                                                    title="Защита на лични данни"
                                                >
                                                    <span>Защита на лични данни</span>
                                                </a>
                                            </li>
                                            <li className={styles.pageFooterItem}>
                                                <a href="" className={styles.link} title="Франчайз">
                                                    <span>Франчайз</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <label
                                htmlFor="footer-cat-toggle-2"
                                className={styles.pageFooterToggle}
                            >
                                <span
                                    className={
                                        styles.pageFooterToggleLabel +
                                        ' ' +
                                        styles.pageFooterToggleLabelDown
                                    }
                                >
                                    Виж повече
                                </span>
                                <span
                                    className={
                                        styles.pageFooterToggleLabel +
                                        ' ' +
                                        styles.pageFooterToggleLabelUp
                                    }
                                >
                                    Виж по - малко
                                </span>
                                <svg className={styles.pageFooterToggleIcon}>
                                    <use xlinkHref=""></use>
                                </svg>
                            </label>
                        </div>
                        <div className={styles.pageFooterMidBlock}>
                            <div className={styles.pageFooterMidBlockItem}>
                                <div
                                    className={
                                        styles.pageFooterIcons + ' ' + styles.pageFooterIconsText
                                    }
                                >
                                    <span className={styles.pageFooterIconsItem}>
                                        <svg className={styles.icon + ' ' + styles.icon_32}>
                                            <use xlinkHref=""></use>
                                        </svg>
                                        <span className={styles.pageFooterIconsText}>
                                            Банков <br />
                                            превод
                                        </span>
                                    </span>
                                    <span className={styles.pageFooterIconsItem}>
                                        <svg className={styles.icon + ' ' + styles.icon_32}>
                                            <use xlinkHref=""></use>
                                        </svg>
                                        <span className={styles.pageFooterIconsText}>
                                            Наложен <br />
                                            платеж
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.pageFooterMidBlockItem}>
                                <ul
                                    className={
                                        styles.pageFooterIcons +
                                        ' ' +
                                        styles.pageFooterIconsPayments
                                    }
                                >
                                    <li className={styles.pageFooterIconsItem}>
                                        <img
                                            src=""
                                            className={styles.pageFooterIconsImage}
                                            alt="Visa"
                                            loading="lazy"
                                            width="38"
                                            height="38"
                                        />
                                    </li>
                                    <li className={styles.pageFooterIconsItem}>
                                        <img
                                            src=""
                                            className={styles.pageFooterIconsImage}
                                            alt="Mastercard"
                                            loading="lazy"
                                            width="38"
                                            height="38"
                                        />
                                    </li>
                                    <li className={styles.pageFooterIconsItem}>
                                        <img
                                            src=""
                                            className={styles.pageFooterIconsImage}
                                            alt="Easypay"
                                            loading="lazy"
                                            width="32"
                                            height="32"
                                        />
                                    </li>
                                    <li className={styles.pageFooterIconsItem}>
                                        <img
                                            src=""
                                            className={styles.pageFooterIconsImage}
                                            alt="Epay.bg"
                                            loading="lazy"
                                            width="45"
                                            height="12"
                                        />
                                    </li>
                                    <li className={styles.pageFooterIconsItem}>
                                        <img
                                            src=""
                                            className={styles.pageFooterIconsImage}
                                            alt="Paypal"
                                            loading="lazy"
                                            width="47"
                                            height="15"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
