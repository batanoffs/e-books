import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Product } from '../../interfaces/product.interface'

interface MultiCarouselInterface {
	products: Product[]
	Component: React.ComponentType<React.PropsWithChildren<{ product: Product }>>
	sx?: React.CSSProperties
}

export const MultiCarousel = ({ products, Component, sx = {} }: MultiCarouselInterface) => {
	const settings = {
		className: 'centerPadding',
		swipeToSlide: true,
		infinite: true,
		autoplay: false,
		dots: false,
		centerPadding: '0px',
		slidesToScroll: 5,
		slidesToShow: 5,
		speed: 500,
		rows: 1,
	}

	return (
		<Slider {...settings}>
			{products &&
				products.map((product: Product) => (
					<Component key={product._id} product={product} />
				))}
		</Slider>
	)
}
