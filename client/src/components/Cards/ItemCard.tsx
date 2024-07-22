import { Favorite, ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import styles from './itemcard.module.scss';

export const ItemCard = ({ item }) => {
    const { _id, title, author, price, imageUrl } = item;
    const navigate = useNavigate();

    const addToCartHandler = (e) => {
        //TODO
        const parent = e.currentTarget.closest(`.${styles.container}`);
        const id = parent.getAttribute('data-id');
        console.log('Added to cart', id);
    };

    const addToFavoritesHandler = (e) => {
        const parent = e.currentTarget.closest(`.${styles.container}`);
        const id = parent.getAttribute('data-id');
        console.log('Added to favorites', id);
    };

    const goToDetailsHandler = (e) => {
        const parent = e.currentTarget;
        const id = parent.getAttribute('data-id');
        navigate(`${window.location.pathname}/${id}`);
    };

    return (
        <div onClick={goToDetailsHandler} className={styles.container} data-id={_id}>
            <div className={styles.bookImageContainer}>
                <div className={styles.buttonContainer}>
                    <button onClick={addToFavoritesHandler}>
                        <Favorite />
                    </button>
                    <button onClick={addToCartHandler}>
                        <ShoppingCart />
                    </button>
                </div>
                <img src={imageUrl} alt={title} />
            </div>
            <div className={styles.bookInfo}>
                <h6>{title}</h6>
                <p>{author}</p>

                <p>{price} лв.</p>
            </div>
        </div>
    );
};
