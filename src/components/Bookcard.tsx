import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Skeleton from '@mui/material/Skeleton'

interface BookProps {
    book: {
        title: string
        id: number
        author: string
        price: number
        rating: number
        imageUrl: string
    }
    loading?: boolean
}

export const Bookcard = (book: BookProps[`book`], { loading = false }) => {
    const [elevation, setElevation] = useState(0)

    return (
        <Card
            sx={{ maxWidth: 130 }}
            elevation={elevation}
            onMouseOver={() => setElevation(10)}
            onMouseOut={() => setElevation(0)}
            key={book.id}
        >
            {loading ? (
                <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            ) : (
                <CardMedia
                    className="aspect-[2/3]"
                    component="img"
                    alt={book.title}
                    image={book.imageUrl}
                />
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
                            {book.title}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                            {book.author}
                        </Typography>
                        <Rating name="read-only" value={book.rating} precision={0.5} readOnly />
                        <Typography variant="body2" color="text.secondary">
                            {book.price} лв.
                        </Typography>
                    </>
                )}
            </CardContent>
        </Card>
    )
}
