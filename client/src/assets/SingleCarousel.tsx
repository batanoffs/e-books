import Slider from 'react-slick';

import { Featured } from '../components/Featured.tsx';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './single-carousel.module.css';

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

export const SingleCarousel = ({ books }: BookProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
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
        <div className={styles.carousel}>
            <Slider {...settings}>
                {books.map((book) => (
                    <Featured key={book._id} book={book} styles={styles} />
                ))}
            </Slider>
        </div>
    );
};
