import Typography from '@mui/material/Typography';
import { useFieldValue } from 'react-admin';

type CustomCoverImageProps = {
    sx?: object;
    imgWidth?: string;
    imageTitle?: boolean;
    newCover?: string;
    setNewCover?: any;
    [key: string]: any;
};
export const CustomCoverImage = ({
    sx = {},
    imgWidth = '100px',
    imageTitle = false,
    newCover,
    setNewCover,
    ...props
}: CustomCoverImageProps) => {
    const coverImage = useFieldValue({ source: 'coverImage' });
    const coverImageType = useFieldValue({ source: 'coverImageType' });
    const title = useFieldValue({ source: 'title' });
    const img = `data:${coverImageType};base64,${coverImage}`;

    if (!coverImage) return null;

    return (
        <Typography component="div" sx={sx}>
            <li style={{ listStyle: 'none' }}>
                <img
                    alt="cover"
                    id='cover'
                    title={title}
                    src={newCover ? newCover : img}
                    style={{ maxWidth: imgWidth }}
                />
            </li>
        </Typography>
    );
};
