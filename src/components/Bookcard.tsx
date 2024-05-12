import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

interface Book {
    title: string
    id: number
    author: string
    price: number
    rating: number
    imageUrl: string
}

interface Props {
    book: Book
}

export const Bookcard: React.FC<Props> = ({ book }) => {
    const { title, id, author, price, imageUrl, rating } = book
    const [elevation, setElevation] = useState(0)
    return (
        <Card
            sx={{ maxWidth: 100 }}
            elevation={elevation}
            onMouseOver={() => setElevation(10)}
            onMouseOut={() => setElevation(0)}
            key={id}
        >
            <CardMedia className="aspect-[2/3]" component="img" alt={title} image={imageUrl} />
            <CardContent className="px-1 pb-1">
                <Typography className="h-[2rem]" gutterBottom variant="h1" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {author}
                </Typography>
                <Rating name="read-only" value={rating} precision={0.5} readOnly />
                <Typography variant="body2" color="text.secondary">
                    {price} лв.
                </Typography>
            </CardContent>
        </Card>
    )
}
