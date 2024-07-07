import { useEffect, useState } from 'react';
import axios from 'axios';
// import { MultyCarousel } from '../../assets/MultyCarousel';
import { SingleCarousel } from '../../components/assets/SingleCarousel';

import style from './home.module.css';
import { API } from '../../constants/api';

interface Book {
    _id: string;
    title: string;
    author: string;
    price: number;
    description: string;
    stock: number;
    imageUrl: string;
    category: string;
}

const HomePage = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(API.BOOKS);
            setBooks(response.data);
        };
        fetchBooks();
    }, []);

    return (
        <main className="mainWrapper">
            {books && <SingleCarousel books={books} />}

            <section className="border-solid border border-gray-500 py-8">
                <h1 className="text-3xl text-center pb-6"> Новодошли </h1>
                {/* <MultyCarousel books={books} /> */}
            </section>
            <section className={style.contentWrapper}> 03 </section>
            <section className={style.contentWrapper}> 04 </section>
            <section className={style.contentWrapper}> 05 </section>
            <section className={style.contentWrapper}> 06 </section>
        </main>
    );
};

export default HomePage;
