import { useEffect, useState } from 'react';
import axios from 'axios';

import { API } from '../../constants/api';
import { SingleCarousel } from '../../components/assets/SingleCarousel';
// import { MultyCarousel } from '../../assets/MultyCarousel';

interface Book {
    _id: string;
    title: string;
    author: string;
    price: number;
    description: string;
    stock: number;
    imageUrl: string;
    category: string;
}

const HomePage = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(API.BOOKS);
            setBooks(response.data);
        };
        fetchBooks();
    }, []);

    return (
        <>
            {books && <SingleCarousel books={books} />}
        </>
    );
};

export default HomePage;
