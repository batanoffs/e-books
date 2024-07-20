import { useEffect, useState } from 'react';
import axios from 'axios';

import { API } from '../../utils/constants/api.ts';
import { useFiltersStore } from '../../store/categories.ts';
import { DashboardBody } from '../../components/Layout/dashboard/DashboardBody.tsx';
import { DashboardLayout } from '../../components/Layout/dashboard/DashboardLayout.tsx';
import { LayoutHeader } from '../../components/Layout/dashboard/LayoutHeader.tsx';
import { LayoutAside } from '../../components/Layout/dashboard/LayoutAside.tsx';
import { BookCard } from './BookCard.tsx';

type PageProps = {
    path: string;
};

const BooksPage = ({ path }: PageProps) => {
    const [books, setBooks] = useState([]);
    const setBookCategories = useFiltersStore((state) => state.setBookCategories);
    const bookCategories = useFiltersStore((state) => state.bookCategories);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(API.BOOKS);
            const books = response.data;
            setBooks(books);
            const categoriesFromBooks = Array.from(new Set(books.map((book) => book.category)));
            setBookCategories(categoriesFromBooks);
        };
        fetchBooks();
    }, []);

    return (
        <DashboardLayout
            path={path}
            header={<LayoutHeader path={path} />}
            aside={<LayoutAside categories={bookCategories} />}
        >
            <DashboardBody items={books} CardComponent={BookCard} />
        </DashboardLayout>
    );
};

export default BooksPage;
