import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const BooksNav = ({ styles }) => {
    const navigate = useNavigate();

    const handleCategoryChange = (category: string) => {
        navigate(`/books/category/${category}`);
    };

    return (
        <div className={styles.navContainer}>
            <h2>Select Book Category</h2>
            <nav className={styles.categoryContainer}>
                <Link to="/books/category/all">Всичко</Link>
                <Link to="/books/category/fiction">Художествена литература</Link>
                <Link to="/books/category/non-fiction">Наука</Link>
                <Link to="/books/category/self-help">Самопомощ</Link>
                <Link to="/books/category/business">Бизнес</Link>
                <Link to="/books/category/spirituality">Духовност</Link>
                <Link to="/books/category/poetry">Поезия</Link>
            </nav>
        </div>
    );
};
