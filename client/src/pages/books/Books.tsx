import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../constants/api';
import NavBooks from '../books/NavBooks.tsx';
import { Bookcard } from '../../components/assets/Bookcard.tsx';

import styles from './books.module.scss';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(API.BOOKS);
            setBooks(response.data);
        };
        fetchBooks();
    }, []);

    return (
        <div className={styles.container}>
            <NavBooks styles={styles} />
            <section className={styles.dashboard}>
                {books.map((book) => (
                    <Bookcard key={book._id} book={book} />
                ))}
            </section>
        </div>
    );
};

export default Books;
