import { useNavigate } from 'react-router-dom';

import styles from './navigation.module.scss';
import { useFiltersStore } from '../../../store/categories';

export const DashboardNavigationAndFilters = () => {
    const categories = useFiltersStore((state) => state.categories);
    const navigate = useNavigate();

    if (!categories) {
        return null;
    }

    console.log(categories);

    const categoryTranslation: Record<string, string> = {
        All: 'всички',
        Fiction: 'художествена литература',
        'Non-fiction': 'наука',
        'Self-Help': 'самопомощ',
        Business: 'бизнес',
        Spirituality: 'духовност',
        Poetry: 'поезия',
    };

    const handleCategoryChange = (category: string) => {
        navigate(`/books/category/${category.toLowerCase()}`);
    };

    return (
        <nav>
            <h6>Категории</h6>
            <div className={styles.line}></div>
            <ul>
                {categories.map((category, index) => (
                    <li key={index} onClick={() => handleCategoryChange(category)}>
                        {categoryTranslation[category]}
                    </li>
                ))}
            </ul>

            <h6>Филтри</h6>
            <div className={styles.filter}>
                <ul>
                    <li onClick={() => handlePriceFilter('price=0-20')}>Цена: до 20 лв.</li>
                    <li onClick={() => handlePriceFilter('price=20-50')}>Цена: 20 - 50 лв.</li>
                    <li onClick={() => handlePriceFilter('price>50')}>Цена: над 50 лв.</li>
                </ul>
                <ul>
                    <li onClick={() => handleAuthorFilter('author=*a*')}>Автор със а</li>
                    <li onClick={() => handleAuthorFilter('author=*e*')}>Автор със е</li>
                    <li onClick={() => handleAuthorFilter('author=*i*')}>Автор със и</li>
                    <li onClick={() => handleAuthorFilter('author=*o*')}>Автор със о</li>
                    <li onClick={() => handleAuthorFilter('author=*u*')}>Автор със у</li>
                    <li onClick={() => handleAuthorFilter('author=*y*')}>Автор със я</li>
                </ul>

                <ul>
                    <li onClick={() => handlePublisherFilter('publisher=*a*')}>
                        Издателство със а
                    </li>
                    <li onClick={() => handlePublisherFilter('publisher=*e*')}>
                        Издателство със е
                    </li>
                    <li onClick={() => handlePublisherFilter('publisher=*i*')}>
                        Издателство със и
                    </li>
                    <li onClick={() => handlePublisherFilter('publisher=*o*')}>
                        Издателство със о
                    </li>
                    <li onClick={() => handlePublisherFilter('publisher=*u*')}>
                        Издателство със у
                    </li>
                    <li onClick={() => handlePublisherFilter('publisher=*y*')}>
                        Издателство със я
                    </li>
                </ul>
            </div>
        </nav>
    );
};
