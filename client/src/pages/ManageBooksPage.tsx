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

const ManageBooksPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('/api/books');
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  const deleteBook = async (id: string) => {
    await axios.delete(`/api/books/${id}`);
    setBooks(books.filter(book => book._id !== id));
  };

  return (
    <div>
      <h1>Manage Books</h1>
      <Link to="/admin/books/new">Add New Book</Link>
      <div>
        {books.map(book => (
          <div key={book._id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>${book.price}</p>
            <Link to={`/admin/books/edit/${book._id}`}>Edit</Link>
            <button onClick={() => deleteBook(book._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBooksPage;
