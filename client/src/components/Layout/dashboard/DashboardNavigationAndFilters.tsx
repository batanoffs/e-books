import { useNavigate } from 'react-router-dom';

import { useFiltersStore } from '../../../store/categories';

import styles from './navigation.module.scss';

export const DashboardNavigationAndFilters = () => {
    const setCategory = useFiltersStore((state) => state.setCategory);
    const navigate = useNavigate();

    const handleCategoryChange = (category: string) => {
        setCategory(category);
        navigate(`/books/category/${category}`);
    };

    return (
        <nav>
            <h6>Категории</h6>
            <div className={styles.line}></div>
            <ul>
                <li onClick={() => handleCategoryChange('all')}>Всички</li>
                <li onClick={() => handleCategoryChange('fiction')}>Художествена литература</li>
                <li onClick={() => handleCategoryChange('non-fiction')}>Наука</li>
                <li onClick={() => handleCategoryChange('self-help')}>Самопомощ</li>
                <li onClick={() => handleCategoryChange('business')}>Бизнес</li>
                <li onClick={() => handleCategoryChange('spirituality')}>Духовност</li>
                <li onClick={() => handleCategoryChange('poetry')}>Поезия</li>
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
