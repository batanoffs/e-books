import Slider from 'react-slick'

import { CarouselCard } from '../Cards/CarouselCard'
import { Book, Books } from '../../interfaces/book.interface'

import styles from './single-carousel.module.scss'

function SampleNextArrow(props) {
	const { onClick } = props
	return <div className={styles.nextArrow} onClick={onClick} />
}

function SamplePrevArrow(props) {
	const { onClick } = props
	return <div className={styles.prevArrow} onClick={onClick} />
}

const SingleCarousel = ({ books }: Books) => {
	const settings = {
		infinite: true,
		autoplay: true,
		speed: 1000,
		lazyLoad: true,
		autoplaySpeed: 10000,
		arrows: true,
		centerPadding: '100px',
		pauseOnHover: true,
		swipeToSlide: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		cssEase: 'linear',

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<Slider className={styles.carousel} {...settings}>
			{books.map((book: Book) => (
				<CarouselCard key={book._id} book={book} styles={styles} />
			))}
		</Slider>
	)
}

export default SingleCarousel
