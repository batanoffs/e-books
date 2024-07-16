import { useEffect, useState } from 'react';
import axios from 'axios';

import { API } from '../../constants/api.ts';
import { BooksHeader } from '../../pages/books/BooksHeader';
import { BooksNav } from '../../pages/books/BooksNav';
import { BooksDashboard } from './BooksDashboard.tsx';
import { DashboardLayout } from '../../components/Layout/DashbaordLayout.tsx';

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
            id: 'collection',
            element: <BooksDashboard books={books} />,
        },
    ];

    return <DashboardLayout header={<BooksHeader />} aside={<BooksNav />} children={content} />;
};

export default BooksPage;
