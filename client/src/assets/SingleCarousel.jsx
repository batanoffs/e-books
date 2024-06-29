import Slider from 'react-slick';
import { Featured } from '../components/Featured';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SingleCarousel = (books) => {
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
        <div className="">
            <Slider {...settings}>
                {books.books.map((book) => (
                    <Featured key={book.id} book={book} />
                ))}
            </Slider>
        </div>
    );
};
