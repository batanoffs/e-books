import { useFiltersStore } from '../../../store/categories';
import styles from './header.module.scss';

export const LayoutHeader = ({ path }): JSX.Element | null => {
    const navCategory = useFiltersStore((state) => state.navCategory);

    if (!navCategory) {
        return null;
    }

    const categoryTranslation: Record<string, string> = {
        all: 'всички',
        fiction: 'художествена литература',
        'non-fiction': 'наука',
        'self-help': 'самопомощ',
        business: 'бизнес',
        spirituality: 'духовност',
        poetry: 'поезия',
    };

    const translatedCategory = categoryTranslation[navCategory];

    return (
        <div className={styles.container}>
            {/* TODO extract this client navigation for future use */}
            <div className={styles.navigation}>
                <p>
                    {path} / <span> {translatedCategory?.toLocaleLowerCase()} </span>
                </p>

                <h1>{translatedCategory}</h1>
            </div>

            <div className={styles.sorting}>
                <p>Резултата: 555</p>
                <div className={styles.sortContainer}>
                    <p>Сортирай по:</p>
                    <select name="sort" id="sort">
                        <option value="low-price">Цена: намаляващ</option>
                        <option value="high-price">Цена: нарастващ</option>
                    </select>
                </div>

                <div className={styles.itemsPerPageContainer}>
                    <p>Покажи по:</p>
                    <select name="itemsPerPage" id="itemsPerPage">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
