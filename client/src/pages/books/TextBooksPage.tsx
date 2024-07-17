import { useEffect, useState } from 'react';
import axios from 'axios';

import { API } from '../../constants/api.ts';
import { DashboardBody } from '../../components/Layout/dashboard/DashboardBody.tsx';
import { DashboardLayout } from '../../components/Layout/dashboard/DashboardLayout.tsx';

type PageProps = {
    path: string;
};

const TextBooksPage = ({ path }: PageProps) => {
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
            element: <DashboardBody books={textbooks} />,
        },
    ];

    return <DashboardLayout path={path} children={content} />;
};

export default TextBooksPage;
