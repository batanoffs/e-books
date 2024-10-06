import Slider, { Settings } from 'react-slick'

import { CarouselCard } from '../Cards/CarouselCard'
import { Product, Products } from '../../interfaces/product.interface'

import styles from './single-carousel.module.scss'

const SampleNextArrow = (props) => {
	const { onClick } = props
	return <div className={styles.nextArrow} onClick={onClick} />
}

const SamplePrevArrow = (props) => {
	const { onClick } = props
	return <div className={styles.prevArrow} onClick={onClick} />
}

export const SingleCarousel = ({ products }: Products) => {
	const settings: Settings = {
		infinite: true,
		autoplay: true,
		speed: 1000,
		lazyLoad: 'ondemand',
		autoplaySpeed: 10000,
		arrows: true,
		centerPadding: '100px',
		pauseOnHover: true,
		swipeToSlide: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<Slider className={styles.carousel} {...settings}>
			{products.map((product: Product) => (
				<CarouselCard key={product._id} product={product} styles={styles} />
			))}
		</Slider>
	)
}
