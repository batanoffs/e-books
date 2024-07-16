import { useEffect, useState } from 'react';
import axios from 'axios';

import { API } from '../../constants/api.ts';
import { BooksHeader } from '../../pages/books/BooksHeader';
import { BooksNav } from '../../pages/books/BooksNav';
import { BooksDashboard } from './BooksDashboard.tsx';
import { DashboardLayout } from '../../components/Layout/DashbaordLayout.tsx';

const TextBooksPage = () => {
    const [textbooks, setTextBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(API.TEXTBOOKS);
            setTextBooks(response.data);
        };
        fetchBooks();
    }, []);

    const content = [
        {
            id: 'collection',
            element: <BooksDashboard books={textbooks} />,
        },
    ];

    return <DashboardLayout header={<BooksHeader />} aside={<BooksNav />} children={content} />;
};

export default TextBooksPage;
