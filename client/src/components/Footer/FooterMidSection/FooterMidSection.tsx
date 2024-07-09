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
                        title='Книжарница "Нов живот"'
                        toggleId="footer-cat-toggle-2"
                        items={[
                            { href: '', title: 'За нас' },
                            { href: '', title: 'Цени и срокове за доставка' },
                            { href: '', title: 'Политика за поверителност' },
                            { href: '', title: 'Кариери' },
                            { href: '', title: 'Връщане и замяна на стока' },
                            {
                                href: '#',
                                title: 'Настройки за поверителност',
                                extraProps: { 'data-amcookie-js': 'footer-link' },
                            },
                            { href: '', title: 'Реклама в Нов Живот' },
                            { href: '', title: 'Онлайн решаване на спорове' },
                            { href: '', title: 'Свържи се с нас' },
                            { href: '', title: 'Общи условия' },
                            { href: '', title: 'Често задавани въпроси' },
                            { href: '', title: 'Магазини Нов Живот center' },
                            { href: '', title: 'Начин на плащане' },
                            { href: '', title: 'Защита на лични данни' },
                            { href: '', title: 'Франчайз' },
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
