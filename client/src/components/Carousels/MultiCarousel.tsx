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
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
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
