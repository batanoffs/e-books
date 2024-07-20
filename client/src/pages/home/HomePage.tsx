import { useEffect, useState } from 'react';
import axios from 'axios';

import { API } from '../../utils/constants/api';
import MainLayout from '../../components/Layout/HomeLayout';
import { useSpinner } from '../../store/utils';
import { SingleCarousel } from '../../components/Carousels/SingleCarousel';
import { MultiCarousel } from '../../components/Carousels/MultiCarousel';

interface Book {
    id: string;
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
    const toggleLoading = useSpinner((state) => state.toggleLoading);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(API.BOOKS);
                setBooks(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                toggleLoading();
            }
        };
        fetchBooks();
    }, []);

    const content = [
        {
            id: 'featured',
            element: <SingleCarousel books={books} />,
        },
        {
            id: 'popular',
            element: <MultiCarousel books={books} />,
        },
    ];

    return <MainLayout children={content} />;
};

export default HomePage;
