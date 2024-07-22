import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { API } from '../../utils/constants/api';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { LayoutHeader } from '../../components/Layout/dashboard/LayoutHeader';
import { ImageViewer } from './ImageViewer';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import styles from './details.module.scss';

interface Item {
    _id: string;
    title: string;
    author: string;
    price: number;
    description: string;
    stock: number;
    imageUrl: string;
}

const DetailsPage = ({ type, path }: { type: string | undefined }) => {
    const id = useParams().id;
    const [book, setBook] = useState<Item | null>(null);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
    const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState(false);
    const [isReturnsOpen, setIsReturnsOpen] = useState(false);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const detailsApi =
        type === 'books' ? API.BOOKS : type === 'textbooks' ? API.TEXTBOOKS : API.STATIONERY;

    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get(`${detailsApi}/${id}`);
            setBook(response.data);
        };
        fetchBook();
    }, [id]);

    const {
        title,
        author,
        description,
        price,
        deliveryPrice,
        imageUrl,
        availability,
        sku,
        translator,
        isbn,
        publisher,
        publicationYear,
        pages,
        language,
        dimensions,
    } = book || {};

    const handleAddToCart = async () => {
        await axios.post(`/cart/${book?._id}`);
    };

    const handleBuyNow = async () => {
        await axios.put(`/cart/${book?._id}`, { quantity: 1 });
    };

    if (!book) return <div>Loading...</div>;

    return (
        <main className="main-wrapper">
            <LayoutHeader path={path} title={title} navCategory resultCount hasSorting={false} />
            <div className={styles.detailsWrapper}>
                <ImageViewer imageUrl={imageUrl} />
                <div className={styles.dropdownSection}>
                    <div className={styles.detailsContainer}>
                        <h1 className={styles.title}>{title}</h1>
                        <h2 className={styles.author}>{author}</h2>
                        <div className={styles.availability}>{availability}</div>
                        <div className={styles.priceSection}>
                            <div className={styles.price}>{price}</div>
                            <div className={styles.deliveryPrice}>Доставка: {deliveryPrice}</div>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.wishlistButton}>
                                <Tooltip title="Добави в любими">
                                    <IconButton aria-label="add to wishlist">
                                        <FavoriteBorder />
                                    </IconButton>
                                </Tooltip>
                            </button>
                            <button className={styles.cartButton}>
                                <ShoppingCart />
                                Добави
                            </button>
                        </div>
                    </div>
                    <div className={styles.dropdownContainer}>
                        <div
                            className={styles.dropdown}
                            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                        >
                            <h3>
                                Описание
                                {isDescriptionOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            </h3>
                            {isDescriptionOpen && (
                                <div>
                                    <div className={styles.metaData}>
                                        <div className={styles.col}>
                                            <p>
                                                <strong>SKU:</strong> {sku}
                                            </p>
                                            <p>
                                                <strong>Преводач:</strong> {translator}
                                            </p>
                                            <p>
                                                <strong>ISBN:</strong> {isbn}
                                            </p>
                                            <p>
                                                <strong>Автор:</strong> {author}
                                            </p>
                                            <p>
                                                <strong>Издателство:</strong> {publisher}
                                            </p>
                                        </div>
                                        <div className={styles.col}>
                                            <p>
                                                <strong>Език:</strong> {language}
                                            </p>
                                            <p>
                                                <strong>Година на издаване:</strong>{' '}
                                                {publicationYear}
                                            </p>
                                            <p>
                                                <strong>Страници брой:</strong> {pages}
                                            </p>
                                            <p>
                                                <strong>Размер см:</strong> {dimensions}
                                            </p>
                                            <p>
                                                <strong>Вид корица:</strong> {dimensions}
                                            </p>
                                        </div>
                                    </div>
                                    <p>{description}</p>
                                </div>
                            )}
                        </div>
                        <div
                            className={styles.dropdown}
                            onClick={() => setIsDeliveryInfoOpen(!isDeliveryInfoOpen)}
                        >
                            <h3>
                                Информация за доставка
                                {isDeliveryInfoOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            </h3>
                            {isDeliveryInfoOpen && (
                                <div>
                                    <p>Доставката обикновено трае 3-5 работни дни.</p>
                                    <p>Цена за доставка: {deliveryPrice}</p>
                                    <p>Безплатна доставка при поръчка над 49.80 лв.</p>
                                </div>
                            )}
                        </div>
                        <div
                            className={styles.dropdown}
                            onClick={() => setIsReturnsOpen(!isReturnsOpen)}
                        >
                            <h3>
                                Върнове
                                {isReturnsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            </h3>
                            {isReturnsOpen && (
                                <p>
                                    Върната книга може да бъде върната в периода от 30 дни от
                                    получаване.
                                </p>
                            )}
                        </div>
                        <div
                            className={styles.dropdown}
                            onClick={() => setIsCommentsOpen(!isCommentsOpen)}
                        >
                            <h3>
                                Коментари
                                {isCommentsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            </h3>
                            {isCommentsOpen && <p>Нямат се наличават коментари.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DetailsPage;
