import { Button } from '@mui/material';

interface CarouselCard {
    book: {
        _id: string;
        title: string;
        author: string;
        coverImagePath: string;
        description: string;
        price: number;
        category: string;
        stock: number;
    };
    styles: typeof styles;
}

export const CarouselCard = ({ book, styles }: CarouselCard) => {
    const { coverImagePath, title, author, price, description, _id } = book;
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>{title}</h1>
                <p>{author}</p>
                <p>{price} лв.</p>
                <span>{description}</span>
                <div className={styles.buttonsContainer}>
                    <Button variant="contained" className={styles.button}>
                        Купи
                    </Button>
                    <Button variant="contained" className={styles.button} href={`/books/${_id}`}>
                        Виж детайли
                    </Button>
                </div>
            </div>
            <div>
                <img className={styles.image} src={coverImagePath} alt={title} />
            </div>
        </div>
    );
};
