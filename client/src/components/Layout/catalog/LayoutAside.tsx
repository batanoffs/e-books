import { useNavigate } from 'react-router-dom'

import useFiltersStore from '../../../store/filters'

import styles from './navigation.module.scss'

type Categories = {
	categories: string[]
}

const LayoutAside = ({ categories }: Categories) => {
	const navigate = useNavigate()
	const setNavCategory = useFiltersStore((state) => state.setNavCategory)
	if (!categories) {
		return null
	}

	const categoryTranslation: Record<string, string> = {
		All: 'всички',
		Fiction: 'художествена литература',
		'Non-fiction': 'наука',
		'Self-Help': 'самопомощ',
		Business: 'бизнес',
		Spirituality: 'духовност',
		Poetry: 'поезия',
	}

	const handleCategoryChange = (category: string) => {
		const currentCategory = category.toLowerCase()
		setNavCategory(currentCategory)
		navigate(`/catalog/books/${category.toLowerCase()}`)
	}

	return (
		<nav>
			<h6>Категории</h6>
			<div className={styles.line}></div>
			<ul>
				{categories.map((category, index) => (
					<li key={index} onClick={() => handleCategoryChange(category)}>
						{categoryTranslation[category]}
					</li>
				))}
			</ul>

			<h6>Филтри</h6>
			<div className={styles.filter}>
				{/* TODO FILTERS */}
				{/*  <div className={`${styles.filterBox} js-accordion-cont is-active`} attribute="price">
                        <div data-role="ln_title" className={`${styles.filterBoxHeader}`} tabIndex={0}>
                            <div className={`${styles.filterBoxHeaderTitle} js-accordion-toggler`} data-show="6">
                                <span>Цена</span>
                                <svg className={`${styles.icon}`}>
                                    <use href="#icon-chevron-down"></use>
                                </svg>
                            </div>
                        </div>
                        <div data-role="ln_content" className={`${styles.filterBoxBody} js-accordion-block`} data-show="6" style={{ display: 'block' }}>
                        <div className={`${styles.smileESRangeSlider}`} data-role="range-price-slider-price">
                            <div className={`${styles.uiSlider} ui-slider-horizontal ui-widget ui-widget-content ui-corner-all`} aria-disabled="false">
                                <div className={`${styles.uiSliderRange} ui-widget-header ui-corner-all`} style={{ left: '0%', width: '100%' }}></div>
                                <a className={`${styles.uiSliderHandle} ui-state-default ui-corner-all`} href="#" style={{ left: '0%' }}></a>
                                <a className={`${styles.uiSliderHandle} ui-state-default ui-corner-all`} href="#" style={{ left: '100%' }}></a>
                            </div>
                            <div data-role="from-label">5,00&nbsp;лв.</div>
                            <div data-role="to-label">60,99&nbsp;лв.</div>
                        </div>
                    </div>
                </div> */}
				<ul>
					<li onClick={() => handlePriceFilter('price=0-20')}>Цена: до 20 лв.</li>
					<li onClick={() => handlePriceFilter('price=20-50')}>Цена: 20 - 50 лв.</li>
					<li onClick={() => handlePriceFilter('price>50')}>Цена: над 50 лв.</li>
				</ul>
				<ul>
					<li onClick={() => handleAuthorFilter('author=*a*')}>Автор със а</li>
					<li onClick={() => handleAuthorFilter('author=*e*')}>Автор със е</li>
					<li onClick={() => handleAuthorFilter('author=*i*')}>Автор със и</li>
					<li onClick={() => handleAuthorFilter('author=*o*')}>Автор със о</li>
					<li onClick={() => handleAuthorFilter('author=*u*')}>Автор със у</li>
					<li onClick={() => handleAuthorFilter('author=*y*')}>Автор със я</li>
				</ul>

				<ul>
					<li onClick={() => handlePublisherFilter('publisher=*a*')}>
						Издателство със а
					</li>
					<li onClick={() => handlePublisherFilter('publisher=*e*')}>
						Издателство със е
					</li>
					<li onClick={() => handlePublisherFilter('publisher=*i*')}>
						Издателство със и
					</li>
					<li onClick={() => handlePublisherFilter('publisher=*o*')}>
						Издателство със о
					</li>
					<li onClick={() => handlePublisherFilter('publisher=*u*')}>
						Издателство със у
					</li>
					<li onClick={() => handlePublisherFilter('publisher=*y*')}>
						Издателство със я
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default LayoutAside