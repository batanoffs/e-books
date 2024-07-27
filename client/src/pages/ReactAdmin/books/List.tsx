import {
    List,
    Datagrid,
    TextField,
    NumberField,
    ImageField,
    Root,
    DateField,
    Filter,
    TextInput,
    useFieldValue,
} from 'react-admin';

import { Typography } from '@mui/material';

const BookFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Търсене..." source="q" alwaysOn />
    </Filter>
);

export const CustomerCard = ({ className = '', ...rest }) => {
    const coverImage = useFieldValue({ source: 'coverImage' });
    const coverImageType = useFieldValue({ source: 'coverImageType' });
    const title = useFieldValue({ source: 'title' });
    const img = `data:${coverImageType};base64,${coverImage}`;
    return (
        <Typography component="div" className={className}>
            <li style={{ listStyle: 'none' }}>
                <img alt="cover" title={coverImage} src={img} style={{ width: '120px' }} />
            </li>
        </Typography>
    );
};

const BookList = (props: any) => {
    const title = useFieldValue({ source: 'title' });
    console.log('title:', title);
    return (
        <List {...props} title="Книги" filters={<BookFilter />}>
            <Datagrid rowClick="edit" style={{ overflow: 'auto' }}>
                <CustomerCard />
                <TextField
                    source="title"
                    label="Заглавие"
                    sortable={true}
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        maxWidth: '100px',
                    }}
                />
                <TextField
                    source="author"
                    label="Автор"
                    sortable={true}
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        maxWidth: '100px',
                    }}
                />
                <NumberField
                    source="price"
                    label="Цена"
                    sortable={true}
                    style={{ maxWidth: '100px' }}
                />
                <TextField
                    source="description"
                    label="Описание"
                    sortable={false}
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        maxWidth: '400px',
                    }}
                />
                <NumberField
                    source="stock"
                    label="Количество"
                    sortable={true}
                    style={{ maxWidth: '100px' }}
                />
                <TextField
                    source="category"
                    label="Категория"
                    sortable={true}
                    style={{ maxWidth: '300px' }}
                />
                <TextField
                    source="publisher"
                    label="Издателство"
                    sortable={false}
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        maxWidth: '300px',
                    }}
                />
                <DateField
                    source="publishDate"
                    label="Год на издаване"
                    sortable={false}
                    style={{ maxWidth: '200px' }}
                />
                <TextField
                    source="translator"
                    label="Преводач"
                    sortable={false}
                    style={{ maxWidth: '300px' }}
                />
                <DateField
                    source="createdAt"
                    label="Добавена на"
                    sortable={false}
                    style={{ maxWidth: '200px' }}
                />
            </Datagrid>
        </List>
    );
};

export default BookList;
