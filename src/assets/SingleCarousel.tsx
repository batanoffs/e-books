import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Featured } from '../components/Featured'

interface BookProps {
    book: {
        id: number
        title: string
        author: string
        price: number
        rating: number
        imageUrl: string
        description: string
    }
}
export const SingleCarousel: React.FC<{ featured: BookProps['book'][] }> = ({ featured }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
    }
    return (
        <div className="">
            <Slider {...settings}>
                {featured.map(({ id, title, author, price, rating, imageUrl, description }) => (
                    <Featured book={{ title, id, author, price, rating, imageUrl, description }} />
                ))}
            </Slider>
        </div>
    )
}
