import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BookcardCarousel } from '../Cards/BookcardCarousel';


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

const MultiCarousel = ({ books }: BookProps) => {
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
        <div className="" style={{ marginTop: '5em' }}>
            <Slider {...settings}>
                {books.map((book) => (
                    <BookcardCarousel key={book._id} book={book} />
                ))}
            </Slider>
        </div>
    );
};

export { MultiCarousel };
