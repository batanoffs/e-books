import { Button } from '@mui/material';

import Rating from '@mui/material/Rating';

export const Featured = ({ book }) => {
    const { imageUrl, title, author, rating, price, description } = book;
    const styles = {
        container: {
            display: 'flex',
            gap: '60px',
            justifyContent: 'space-between',
            margin: '40px',
        },
        textContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '40%',
        },
        image: {
            width: '400px',
            height: 'auto',
        },
        button: {
            marginTop: '2px',
            width: '200px',
        },
    };
    return (
        <div style={styles.container}>
            <div style={styles.textContainer}>
                <h1 style={{ fontSize: '3rem' }}>{title}</h1>
                <p>{author}</p>
                <Rating name="read-only" value={rating} precision={0.5} readOnly />
                <p>{price} лв.</p>
                <span>{description}</span>
                <Button variant="contained" style={styles.button}>
                    КУПИ
                </Button>
            </div>
            <div>
                <img style={styles.image} src={imageUrl} alt={title} />
            </div>
        </div>
    );
};
