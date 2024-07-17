import { useEffect, useState } from 'react';
import axios from 'axios';

import { API } from '../../constants/api.ts';
import { DashboardBody } from '../../components/Layout/dashboard/DashboardBody.tsx';
import { DashboardLayout } from '../../components/Layout/dashboard/DashboardLayout.tsx';
import { useFiltersStore } from '../../store/categories.ts';

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
            const categoriesFromTextbooks = Array.from(new Set(textbooks.map((textbook) => textbook.category)));
            setTextbookCategories(categoriesFromTextbooks);
        };
        fetchBooks();
    }, []);

    const content = [
        {
            id: 'textbooks',
            element: <DashboardBody books={textbooks}  />,
        },
    ];

    return <DashboardLayout path={path} children={content} categories={textbookCategories}/>;
};

export default TextBooksPage;
