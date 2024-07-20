import { BookCard } from '../../../pages/Books/BookCard';

interface Item {
    _id: string;
    [key: string]: any; // Additional properties of the book
}

interface DashboardProps {
    items: Item[];
}

export const DashboardBody = ({ items }: DashboardProps) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '0.5em' }}>
        {items.map((item) => (
            <BookCard key={item._id} book={item} /> //TODO replace with dynamic component
        ))}
    </div>
);
