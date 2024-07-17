import { BookCard } from '../../../pages/books/BookCard';

interface Book {
    _id: string;
    [key: string]: any; // Additional properties of the book
}

interface BooksDashboardProps {
    books: Book[];
}

export const DashboardBody = ({ books }: BooksDashboardProps) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', gap: '0.5em' }}>
        {books.map((book) => (
            <BookCard key={book._id} book={book} />
        ))}
    </div>
);
