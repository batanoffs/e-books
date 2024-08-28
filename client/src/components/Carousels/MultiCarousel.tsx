import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Item {
	_id?: string
	[key: string]: unknown
}

interface MultiCarouselInterface {
	items: Item[]
	CardComponent: React.ComponentType<React.PropsWithChildren<{ item: Item }>>
	sx?: React.CSSProperties
}

const MultiCarousel = ({ items, CardComponent }: MultiCarouselInterface) => {
	const settings = {
		className: 'centerPadding',
		swipeToSlide: true,
		centerMode: true,
		infinite: true,
		autoplay: true,
		dots: false,
		centerPadding: '0px',
		slidesToScroll: 5,
		slidesToShow: 5,
		speed: 500,
		rows: 1,
	}
	return (
		<Slider {...settings}>
			{items?.length > 0 ? (
				items.map((item) => <CardComponent key={item._id} item={item} />)
			) : (
				<p>Няма намерени</p>
			)}
		</Slider>
	)
}

export default MultiCarousel
