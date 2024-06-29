import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Book {
  _id: string;
  title: string;
  author: string;
  price: number;
  description: string;
  stock: number;
}

const HomePage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('/api/books');
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book Store</h1>
      <div>
        {books.map(book => (
          <div key={book._id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>${book.price}</p>
            <Link to={`/books/${book._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
