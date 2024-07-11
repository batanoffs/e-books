import FooterSection from './FooterSection';
import SocialIcons from './SocialIcons';
import PaymentOptions from './PaymentOptions';

import styles from './footer-mid.module.scss';

export default function FooterMidSection() {
    return (
        <div className={styles.pageFooterMid}>
            <div className={styles.wrapper}>
                <div className={styles.pageFooterMidCont}>
                    {/* Categories Section */}
                    <FooterSection
                        title="Категории с продукти"
                        toggleId="footer-cat-toggle"
                        items={[
                            { href: '/knizharnitsa', title: 'Книжарница' },
                            { href: '/za-uchilishte', title: 'За училище' },
                            { href: '/kantselarski-materiali', title: 'Канцеларски материали' },
                            { href: '/hobi-i-nastolni-igri', title: 'Хоби и настолни игри' },
                            { href: '/igri-i-igrachki', title: 'Игри и играчки' },
                            { href: '/gifts', title: 'Подаръци' },
                            { href: '/muzika-i-filmi', title: 'Музика и филми' },
                        ]}
                        styles={styles}
                    >
                        <SocialIcons styles={styles} />
                    </FooterSection>

                    {/* Company Section */}
                    <FooterSection
                        title='Книжарница "Емануил"'
                        toggleId="footer-cat-toggle-2"
                        items={[
                            { href: '/about', title: 'За нас' },
                            { href: '/prices', title: 'Цени и срокове за доставка' },
                            { href: '/politics', title: 'Политика за поверителност' },
                            { href: '/career', title: 'Кариери' },
                            { href: '/refund', title: 'Връщане и замяна на стока' },
                            {
                                href: '/privacy-settings',
                                title: 'Настройки за поверителност',
                                extraProps: { 'data-amcookie-js': 'footer-link' },
                            },
                            { href: '/advertising', title: 'Реклама в Емануил' },
                            { href: '/support', title: 'Онлайн решаване на спорове' },
                            { href: '/contact', title: 'Свържи се с нас' },
                            { href: '/terms', title: 'Общи условия' },
                            { href: '/faq', title: 'Често задавани въпроси' },
                            { href: '/shops', title: 'Магазини Емануил center' },
                            { href: '/payment', title: 'Начин на плащане' },
                            { href: '/privacy', title: 'Защита на лични данни' },
                            { href: '/franchise', title: 'Франчайз' },
                        ]}
                        styles={styles}
                    >
                        <PaymentOptions styles={styles} />
                    </FooterSection>
                </div>
            </div>
        </div>
    );
}
