import { Button } from '@mui/material';

import Rating from '@mui/material/Rating';

export const Featured = ({ book }) => {
    const { imageUrl, title, author, rating, price, description } = book;
    return (
        <div className="flex gap-60 justify-between">
            <div className="flex flex-col self-center">
                <h1 className="text-3xl"> {title} </h1>
                <p>{author}</p>
                <Rating name="read-only" value={rating} precision={0.5} readOnly />
                <p>{price} лв.</p>
                <span>{description}</span>
                <Button variant="contained" sx={{ mt: 2, width: 200 }}>
                    КУПИ
                </Button>
            </div>
            <div className="flex-shrink-0">
                <img className="w-[300px] h-[400px]" src={imageUrl} alt={title} />
            </div>
        </div>
    );
};
