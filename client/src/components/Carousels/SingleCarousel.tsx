import Slider from 'react-slick'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import styles from './single-carousel.module.scss'
import { CarouselCard } from '../Cards/CarouselCard'
import { Book, Books } from '../../interfaces/book.interface'

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
		dots: true,
		infinite: true,
		autoplay: true, //TODO edit autoplay
		speed: 1000,
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
