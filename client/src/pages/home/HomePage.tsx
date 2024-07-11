import { useEffect, useState } from 'react';
import axios from 'axios';

import { API } from '../../constants/api';
import { SingleCarousel } from '../../components/assets/SingleCarousel';
import { MultiCarousel } from '../../components/assets/MultiCarousel';

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

    const isLoading = books.length === 0 ? true : false;
    return (
        <>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <SingleCarousel books={books} />
                    <MultiCarousel books={books} />
                </>
            )}
        </>
    );
};

export default HomePage;
