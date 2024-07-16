import { Favorite, ShoppingCart, Star } from '@mui/icons-material';

import styles from './bookcard.module.scss';

export const BookCard = ({ book }) => {
    const { _id, title, author, price, imageUrl } = book;

    return (
        <div className={styles.container} data-id={_id}>
            <div className={styles.bookImageContainer}>
                <img src={imageUrl} alt={title} />
            </div>
            <div className={styles.bookInfo}>
                <h6>{title}</h6>
                <p>{author}</p>

                <p>{price} лв.</p>
                <div className={styles.buttonContainer}>
                    <button>
                        <Favorite />
                    </button>
                    <button>
                        <ShoppingCart /> Добави
                    </button>
                </div>
            </div>
        </div>
    );
};
