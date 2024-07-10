import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Bookcard } from './Bookcard';

interface Props {
    books: {
        id: number;
        title: string;
        author: string;
        rating: number;
        cover: string;
    }[];
}

const MultyCarousel: React.FC<Props> = ({ books }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
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
    };
    return (
        <div className="">
            <Slider {...settings}>
                {books.map((book) => (
                    <Bookcard key={book.id} book={book} />
                ))}
            </Slider>
        </div>
    );
};

export { MultyCarousel };
