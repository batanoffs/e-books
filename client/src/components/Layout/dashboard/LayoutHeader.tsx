import styles from './header.module.scss';

export const LayoutHeader = ({ path, navCategory, title, hasSorting, resultCount }) => {
    return (
        <div className={styles.container}>
            {/* TODO extract this client navigation for future use */}
            <div className={styles.navigation}>
                <p>
                    {path} / <span>{title}</span>
                </p>

                {navCategory && <h1>{navCategory}</h1>}
            </div>

            {hasSorting && (
                <div className={styles.sorting}>
                    <p>Резултата: {resultCount ? resultCount : 'Няма намерени'}</p>
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
            )}
        </div>
    );
};
