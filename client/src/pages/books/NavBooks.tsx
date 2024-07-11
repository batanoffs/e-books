import { CSSProperties, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

type NavBooksProps = { styles: CSSProperties };

function NavBooks({ styles }: NavBooksProps) {
    const navigate = useNavigate();

    const handleCategoryChange = (category: string) => {
        navigate(`/books/category/${category}`);
    };

    return (
        <div className={styles.navContainer}>
            <h2>Select Book Category</h2>
            <nav className={styles.categoryContainer}>
                <Link to="/books/category/">Всичко</Link>
                <Link to="/books/category/Fiction">Художествена литература</Link>
                <Link to="/books/category/Non-Fiction">Наука</Link>
                <Link to="/books/category/Self-Help">Самопомощ</Link>
                <Link to="/books/category/Business">Бизнес</Link>
                <Link to="/books/category/Spirituality">Духовност</Link>
                <Link to="/books/category/Poetry">Поезия</Link>
            </nav>
        </div>
    );
}

export default NavBooks;


