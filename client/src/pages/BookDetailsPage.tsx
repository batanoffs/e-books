import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Book {
  _id: string;
  title: string;
  author: string;
  price: number;
  description: string;
  stock: number;
}

const BookDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`/api/books/${id}`);
      setBook(response.data);
    };
    fetchBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>${book.price}</p>
      <p>{book.description}</p>
      <p>Stock: {book.stock}</p>
    </div>
  );
};

export default BookDetailsPage;
