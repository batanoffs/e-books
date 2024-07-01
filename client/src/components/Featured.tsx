import { Button } from '@mui/material';
import styles from './Featured.module.css';

interface FeaturedProps {
    book: {
        _id: string;
        title: string;
        author: string;
        imageUrl: string;
        description: string;
        price: number;
        category: string;
        stock: number;
    };
    styles: typeof styles;
}

export const Featured = ({ book, styles }: FeaturedProps) => {
    const { imageUrl, title, author, price, description } = book;
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.textContainer}>{title}</h1>
                <p>{author}</p>
                <p>{price} лв.</p>
                <span>{description}</span>
                <Button variant="contained" className={styles.button}>
                    КУПИ
                </Button>
            </div>
            <div>
                <img className={styles.image} src={imageUrl} alt={title} />
            </div>
        </div>
    );
};

