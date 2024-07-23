import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { API } from '../../utils/constants/api';
import { LayoutHeader } from '../../components/Layout/dashboard/LayoutHeader';
import { DetailsLayout } from '../../components/Layout/detail/DetailsLayout';
import { ImageViewer } from './ImageViewer';

import { ProductDetails } from './ProductDetails';

interface Item {
    _id: string;
    title: string;
    author: string;
    price: number;
    description: string;
    stock: number;
    imageUrl: string;
}

export const DetailsPage = ({ type, path }: { type: string | undefined }) => {
    const id = useParams().id;
    const [book, setBook] = useState<Item | null>(null);

    const detailsApi =
        type === 'books' ? API.BOOKS : type === 'textbooks' ? API.TEXTBOOKS : API.STATIONERY;

    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get(`${detailsApi}/${id}`);
            setBook(response.data);
        };
        fetchBook();
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return (
        <DetailsLayout
            header={
                <LayoutHeader
                    path={path}
                    title={book.title}
                    navCategory
                    resultCount
                    hasSorting={false}
                />
            }
            aside={<ImageViewer imageUrl={book.imageUrl} />}
            path={path}
        >
            <ProductDetails {...book} />
        </DetailsLayout>
    );
};
