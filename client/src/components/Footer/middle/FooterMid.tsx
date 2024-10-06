import { FooterSection } from './FooterSection'
import SocialIcons from './SocialIcons'
import PaymentOptions from './PaymentOptions'
import { footerCompanyLinks, footerCategoryLinks } from '../../../utils/constants/index'

import styles from './footer-mid.module.scss'

export const FooterMidSection = () => {
	return (
		<div className={styles.pageFooterMid}>
			<div className={styles.wrapper}>
				<div className={styles.pageFooterMidCont}>
					<FooterSection
						title='Категории с продукти'
						items={footerCategoryLinks}
						styles={styles}
					>
						<SocialIcons styles={styles} />
					</FooterSection>

					<FooterSection
						title='Книжарница "книги бг"'
						items={footerCompanyLinks}
						styles={styles}
					>
						<PaymentOptions styles={styles} />
					</FooterSection>
				</div>
			</div>
		</div>
	)
}
