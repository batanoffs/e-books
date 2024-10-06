import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CategoryItem } from '../../interfaces/categories.interface'

interface CategoriesCarouselInterface {
	categories: CategoryItem[]
	Component: React.ComponentType<React.PropsWithChildren<{ category: CategoryItem }>>
	sx?: React.CSSProperties
}

export const CategoriesCarousel = ({
	categories,
	Component,
	sx = {},
}: CategoriesCarouselInterface) => {
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
			{categories &&
				categories.map((category: CategoryItem) => (
					<Component key={category._id} category={category} />
				))}
		</Slider>
	)
}
