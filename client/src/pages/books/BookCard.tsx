import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Skeleton,
    Rating,
    Button,
    Box,
    IconButton,
} from '@mui/material';
import { useState } from 'react';
import { useSpinner } from '../../store/utils';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const BookCard = ({ book }) => {
    const [elevation, setElevation] = useState(0);
    const { _id, title, author, rating, price, imageUrl } = book;

    const loading = useSpinner((state) => state.isLoading);

    return (
        <Card
            sx={{
                maxWidth: 180,
                borderRadius: 4,
                boxShadow: 4,
                width: '100%',
                transition: 'all 0.3s ease',
            }}
            elevation={elevation}
            onMouseOver={() => setElevation(8)}
            onMouseOut={() => setElevation(2)}
            key={_id}
        >
            <CardMedia
                sx={{
                    height: 200,
                    borderRadius: 4,
                    objectFit: 'cover',
                }}
                component="img"
                alt={title}
                image={imageUrl}
            />
            <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    {loading ? <Skeleton animation="wave" height={16} /> : title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                    {loading ? <Skeleton animation="wave" width="80%" /> : author}
                </Typography>
                <Rating name="read-only" value={rating} precision={0.5} readOnly />
                <Typography variant="body2" color="text.secondary">
                    {loading ? <Skeleton animation="wave" width={30} /> : `$${price}`}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        mt: 2,
                        flexWrap: 'nowrap',
                        justifyContent: 'center',
                    }}
                >
                    <IconButton
                        color="inherit"
                        sx={{
                            flexGrow: 0,
                            width: '30px',
                            mb: { xs: 1, sm: 0 },
                        }}
                    >
                        <FavoriteIcon />
                    </IconButton>
                    <Button
                        variant="contained"
                        sx={{
                            width: { xs: '100%', sm: 'auto' },
                            flexGrow: 1,
                            mb: { xs: 1, sm: 0 },
                        }}
                        startIcon={<AddShoppingCartIcon />}
                    >
                        Добави
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};
