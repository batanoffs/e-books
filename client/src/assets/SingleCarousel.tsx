import Slider from 'react-slick';
import { Featured } from '../components/Featured';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    style: string;
}

export const SingleCarousel = ({ books, style }: BookProps) => {
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
        <div className={style}>
            <Slider {...settings}>
                {books.map((book) => (
                    <Featured key={book._id} book={book} />
                ))}
            </Slider>
        </div>
    );
};
