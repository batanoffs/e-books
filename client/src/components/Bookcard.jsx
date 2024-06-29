import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';

export const Bookcard = ({ book, loading = false }) => {
    const [elevation, setElevation] = useState(0);
    const { id, imageUrl, title, author, rating, price } = book;

    return (
        <Card
            sx={{ maxWidth: 130 }}
            elevation={elevation}
            onMouseOver={() => setElevation(10)}
            onMouseOut={() => setElevation(0)}
            key={id}
        >
            {loading ? (
                <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            ) : (
                <CardMedia className="aspect-[2/3]" component="img" alt={title} image={imageUrl} />
            )}
            <CardContent className="px-1 pb-2">
                {loading ? (
                    <>
                        <Skeleton animation="wave" variant="text" height={10} />
                        <Skeleton animation="wave" variant="text" height={10} width="80%" />
                    </>
                ) : (
                    <>
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                            {author}
                        </Typography>
                        <Rating name="read-only" value={rating} precision={0.5} readOnly />
                        <Typography variant="body2" color="text.secondary">
                            {price} лв.
                        </Typography>
                    </>
                )}
            </CardContent>
        </Card>
    );
};
