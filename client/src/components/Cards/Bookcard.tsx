import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

export const Bookcard = ({ book, loading = false }) => {
    const { id, imageUrl, title, author, price } = book ?? {};

    if (!book) return null;

    return (
        <Card
            sx={{ maxWidth: 140, cursor: 'pointer', borderRadius: '0px', boxShadow: 'none' }}
            key={id}
        >
            {loading ? (
                <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            ) : (
                <CardMedia component="img" alt={title} image={imageUrl} />
            )}

            <CardContent sx={{ padding: '0.5em' }}>
                {loading ? (
                    <div>
                        <Skeleton animation="wave" variant="text" height={10} />
                        <Skeleton animation="wave" variant="text" height={10} width="80%" />
                    </div>
                ) : (
                    <>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{
                                fontSize: 'small',
                                fontWeight: 800,
                                textAlign: 'center',
                                height: '3em',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                MozBoxOrient: 'vertical',
                                boxOrient: 'vertical',
                                marginBottom: '1em',
                                cursor: 'pointer',
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                            sx={{
                                fontSize: 'small',
                                fontWeight: 400,
                                textAlign: 'center',
                                height: '1.4em',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                MozBoxOrient: 'vertical',
                                boxOrient: 'vertical',
                                marginBottom: '1em',
                            }}
                        >
                            {author}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ textAlign: 'center' }}
                        >
                            {price} лв.
                        </Typography>
                    </>
                )}
            </CardContent>
        </Card>
    );
};