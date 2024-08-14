import { IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import BookIcon from '@mui/icons-material/Book'

const SocialIcon = ({ href, title, styles, extraClass = '' }) => (
	<li className={styles.pageFooterIconsItem}>
		<IconButton
			href={href}
			title={title}
			target='_blank'
			rel='noopener'
			className={styles.pageFooterIconsItem}
		>
			{title === 'Facebook' && <FacebookIcon />}
			{title === 'Instagram' && <InstagramIcon />}
			{title === 'blog' && <BookIcon />}
		</IconButton>
	</li>
)

const SocialIcons = ({ styles }) => (
	<div className={styles.pageFooterMidBlock}>
		<div className={styles.pageFooterMidBlockItem}>
			<ul className={styles.pageFooterIcons}>
				<SocialIcon styles={styles} href='' title='Facebook' />
				<SocialIcon styles={styles} href='' title='Instagram' />
				<SocialIcon styles={styles} href='' title='blog' />
			</ul>
		</div>
	</div>
)

export default SocialIcons
