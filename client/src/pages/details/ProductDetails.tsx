import { useState } from 'react';
import axios from 'axios';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import styles from './details.module.scss';
import QuantityInput from '../../components/QuantityInput/QuantityInput';

interface ProductDetailsProps {
    title: string;
    author: string;
    description: string;
    price: number;
    deliveryPrice: number;
    availability: string;
    sku: string;
    translator: string;
    isbn: string;
    publisher: string;
    publicationYear: number;
    pageCount: number;
    language: string;
    dimensions: string;
    coverPageType: string;
    publishDate: Date;
    stock: number;
    _id: string;
}

export const ProductDetails = ({
    title,
    author,
    description,
    price,
    deliveryPrice,
    availability,
    sku,
    translator,
    isbn,
    publisher,
    publishDate,
    stock,
    coverPageType,
    pageCount,
    language,
    dimensions,
    _id,
}: ProductDetailsProps) => {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(true);
    const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState<boolean>(false);
    const [isReturnsOpen, setIsReturnsOpen] = useState<boolean>(false);
    const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false);

    const handleAddToCart = async (id, quantity) => {
        //TODO add to cart
        console.log('Added to cart');

        // await axios.post(`/cart/${_id}`);
    };

    const handleBuyNow = async () => {
        //TODO buy now
        console.log('Buy now');

        // await axios.put(`/cart/${_id}`, { quantity: 1 });
    };

    const handleAddToWishlist = async () => {
        //TODO buy now
        console.log('Added to wishlist');

        // await axios.put(`/cart/${_id}`, { quantity: 1 });
    };

    return (
        <div className={styles.detailsWrapper}>
            <div className={styles.dropdownSection}>
                <div className={styles.detailsContainer}>
                    <div className={styles.titleSection}>
                        <h1 className={styles.title}>{title}</h1>
                        <Tooltip title="Добави в любими">
                            <IconButton
                                className={styles.likeButton}
                                onClick={handleAddToWishlist}
                                aria-label="add to wishlist"
                            >
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <h2 className={styles.author}>{author}</h2>
                    <div className={styles.availability}>{availability}</div>
                    <div className={styles.priceSection}>
                        <div className={styles.price}>{price} лв.</div>
                        <div className={styles.deliveryPrice}>Доставка: {deliveryPrice}</div>
                    </div>
                    <div className={styles.actions}>
                        <IconButton
                            className={styles.cartButton}
                            onClick={handleBuyNow}
                            aria-label="buy now"
                        >
                            Купи сега
                        </IconButton>

                        <div className={styles.cartContainer}>
                            <IconButton
                                className={styles.cartButton}
                                onClick={handleAddToCart}
                                aria-label="add to wishlist"
                            >
                                <ShoppingCartIcon /> Добави в количка
                            </IconButton>

                            <QuantityInput itemId={_id} handleAddToCart={handleAddToCart} />
                        </div>
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
                                            <strong>Година на издаване:</strong> {publishDate}
                                        </p>
                                        <p>
                                            <strong>Страници брой:</strong> {pageCount}
                                        </p>
                                        <p>
                                            <strong>Размер см:</strong> {dimensions}
                                        </p>
                                        <p>
                                            <strong>Вид корица:</strong> {coverPageType}
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
                                <p>Доставката обикновено трае между 3 и 5 работни дни.</p>
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
                            Връщане
                            {isReturnsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        </h3>
                        {isReturnsOpen && (
                            <p>
                                Връщане може да се применява само при първото поръчване на книга. То
                                може да се осъществи в рамките на 30 дни след първото поръчване.
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
                        {isCommentsOpen && <p>Няма налични коментари все още за този продукт.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};
