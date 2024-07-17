import { useEffect, useState } from 'react';
import axios from 'axios';

import { API } from '../../constants/api.ts';
import { DashboardBody } from '../../components/Layout/dashboard/DashboardBody.tsx';
import { DashboardLayout } from '../../components/Layout/dashboard/DashboardLayout.tsx';

type PageProps = {
    path: string;
};

const BooksPage = ({ path }: PageProps) => {
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
            element: <DashboardBody books={books} />,
        },
    ];

    return <DashboardLayout path={path} children={content} />;
};

export default BooksPage;
