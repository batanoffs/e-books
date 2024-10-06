type FooterSectionProps = {
	title: string
	items: { href: string; title: string; extraProps?: any }[]
	children: React.ReactNode
	styles: any
}

export const FooterSection = ({ title, items, children, styles }: FooterSectionProps) => {
	const redirectHandler = (e: MouseEvent) => {
		e.preventDefault()
	}

	return (
		<div className={styles.pageFooterMidItemSmall}>
			<div className={styles.pageFooterTitle}>{title}</div>
			<div className={styles.pageFooterListCont}>
				<div data-content-type='row' data-appearance='contained' data-element='main'>
					<div
						data-enable-parallax='0'
						data-parallax-speed='0.5'
						data-background-images='{}'
						data-background-type='image'
						data-video-loop='true'
						data-video-play-only-visible='true'
						data-video-lazy-load='true'
						data-video-fallback-src=''
						data-element='inner'
						className={styles.categoryWrapper}
					>
						<div
							data-content-type='html'
							data-appearance='default'
							data-element='main'
							data-decoded='true'
							className={styles.categories}
						>
							<ul className={styles.pageFooterList}>
								{items.map((item, index) => (
									<li key={index} className={styles.pageFooterItem}>
										<a
											href={'#'}
											onClick={redirectHandler}
											className={styles.link}
											title={item.title}
											{...item.extraProps}
										>
											<span>{item.title}</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			{children}
		</div>
	)
}
