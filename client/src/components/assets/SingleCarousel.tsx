import Slider from 'react-slick';

import { Featured } from './Featured.tsx';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './single-carousel.module.scss';

interface BookProps {
    books: {
        _id: string;
        title: string;
        author: string;
        imageUrl: string;
        description: string;
        price: number;
        category: string;
        stock: number;
    }[];
}
function SampleNextArrow(props) {
    const { onClick } = props;
    return <div className={styles.nextArrow} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return <div className={styles.prevArrow} onClick={onClick} />;
}

export const SingleCarousel = ({ books }: BookProps) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true, //TODO edit autoplay
        speed: 5000,
        autoplaySpeed: 10000,
        arrows: true,
        centerPadding: '60px',
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
    };
    return (
        <Slider className={styles.carousel} {...settings}>
            {books.map((book) => (
                <Featured key={book._id} book={book} styles={styles} />
            ))}
        </Slider>
    );
};
