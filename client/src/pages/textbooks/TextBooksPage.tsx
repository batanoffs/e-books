import { useEffect, useState } from 'react';
import axios from 'axios';

import { API } from '../../utils/constants/api.ts';
import { DashboardBody } from '../../components/Layout/dashboard/DashboardBody.tsx';
import { DashboardLayout } from '../../components/Layout/dashboard/DashboardLayout.tsx';
import { LayoutHeader } from '../../components/Layout/dashboard/LayoutHeader.tsx';
import { LayoutAside } from '../../components/Layout/dashboard/LayoutAside.tsx';
import { useFiltersStore } from '../../store/categories.ts';
import { BookCard } from '../Books/BookCard.tsx';

type PageProps = {
    path: string;
};

const TextBooksPage = ({ path }: PageProps) => {
    const [textbooks, setTextBooks] = useState([]);
    const setTextbookCategories = useFiltersStore((state) => state.setTextbookCategories);
    const textbookCategories = useFiltersStore((state) => state.textbookCategories);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(API.TEXTBOOKS);
            const textbooks = response.data;
            setTextBooks(textbooks);
            const categoriesFromTextbooks = Array.from(
                new Set(textbooks.map((textbook) => textbook.category))
            );
            setTextbookCategories(categoriesFromTextbooks);
        };
        fetchBooks();
    }, []);
    return (
        <DashboardLayout
            path={path}
            header={<LayoutHeader path={path} />}
            aside={<LayoutAside categories={textbookCategories} />}
        >
            <DashboardBody items={textbooks} CardComponent={BookCard} />
        </DashboardLayout>
    );
};

export default TextBooksPage;
