import styles from './header.module.scss';

export const BooksHeader = () => {
    return (
        <div>
            BooksHeader
            <p>
                книжарница / книги / <span> {category.toLocaleLowerCase()}</span>
            </p>
        </div>
    );
};
