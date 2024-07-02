import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API } from '../../constants/api';
import styles from './mange-books-page.module.css';

interface Book {
    _id: string;
    title: string;
    author: string;
    price: number;
    description: string;
    stock: number;
    imageUrl: string;
}

const ManageBooksPage: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(API.BOOKS);
            setBooks(response.data);
        };
        fetchBooks();
    }, []);

    const deleteBook = async (id: string) => {
        await axios.delete(`${API.BOOKS}/${id}`);
        setBooks(books.filter((book) => book._id !== id));
    };

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const search = event.target.value;
        setSearchQuery(search);
    };

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={styles.wrapper}>
            <div className={styles.navContainer}>
                <h1 className={styles.title}>Списък с книги</h1>

                <Link className={styles.button} to="/admin/books/new">
                    Добави книга
                </Link>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.searchContainer}>
                    <input
                        className={styles.searchInput}
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder="Търсене по име"
                    />
                </div>
                <table className={styles.bookTable}>
                    <thead>
                        <tr>
                            <th className={styles.bookCell}>Корица</th>
                            <th className={styles.bookCell}>Име</th>
                            <th className={styles.bookCell}>Автор</th>
                            <th className={styles.bookCell}>Описание</th>
                            <th className={styles.bookCell}>Цена</th>
                            <th className={styles.bookCell}>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBooks.map((book) => (
                            <tr className={styles.bookRow} key={book._id}>
                                <td className={styles.bookCell}>
                                    <img
                                        className={styles.bookImage}
                                        src={book.imageUrl}
                                        alt={book.title}
                                    />
                                </td>
                                <td className={styles.bookCell}>{book.title}</td>
                                <td className={styles.bookCell}>{book.author}</td>
                                <td className={styles.bookCell}>{book.description}</td>
                                <td className={styles.bookCell}>{`${book.price} лв.`}</td>
                                <td className={styles.bookCell}>
                                    <div className={styles.buttonsContainer}>
                                        <Link
                                            className={styles.button}
                                            to={`/admin/books/edit/${book._id}`}
                                        >
                                            Обнови
                                        </Link>
                                        <button
                                            className={styles.button}
                                            onClick={() => deleteBook(book._id)}
                                        >
                                            Изтрий
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBooksPage;
