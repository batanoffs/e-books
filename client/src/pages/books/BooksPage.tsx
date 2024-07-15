import { useEffect, useState } from 'react';
import axios from 'axios';

import { API } from '../../constants/api.ts';
import { BooksNav } from './BooksNav.tsx';
import HomeLayout from '../../components/Layout/HomeLayout.tsx';
import { BooksHeader } from './BooksHeader.tsx';
import { BooksDashboard } from './BooksDashboard.tsx';

import styles from './books.module.scss';

const BooksPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(API.BOOKS);
            setBooks(response.data);
        };
        fetchBooks();
    }, []);

    const content = [
        {
            id: 'header',
            element: <BooksHeader />,
        },
        {
            id: 'collection',
            element: <BooksDashboard books={books} />,
        },
    ];

    return (
        <>
            <BooksNav styles={styles} />
            <HomeLayout children={content} />;
        </>
    );
};

export default BooksPage;
