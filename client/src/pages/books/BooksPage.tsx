import { useEffect, useState } from 'react';
import axios from 'axios';

import { API } from '../../constants/api.ts';
import { useFiltersStore } from '../../store/categories.ts';
import { DashboardBody } from '../../components/Layout/dashboard/DashboardBody.tsx';
import { DashboardLayout } from '../../components/Layout/dashboard/DashboardLayout.tsx';

type PageProps = {
    path: string;
};

const BooksPage = ({ path }: PageProps) => {
    const [books, setBooks] = useState([]);
    const setCategories = useFiltersStore((state) => state.setCategories);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(API.BOOKS);
            const books = response.data;
            setBooks(books);
            const categoriesFromBooks = Array.from(new Set(books.map((book) => book.category)));
            setCategories(categoriesFromBooks);
        };
        fetchBooks();
    }, []);

    const content = [
        {
            id: 'books',
            element: <DashboardBody books={books} />,
        },
    ];

    return <DashboardLayout path={path} children={content} />;
};

export default BooksPage;
