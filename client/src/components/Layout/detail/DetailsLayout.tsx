import styles from './details.module.scss';

type MainLayoutProps = {
    header: JSX.Element;
    aside: JSX.Element;
    [key: string]: any;
};

//TODO improve dynamic pipelines for sidebar filters and header
export const DetailsLayout = ({ children, header, aside, ...props }: MainLayoutProps) => {
    return (
        <main className="main-wrapper">
            <header>{header}</header>
            <div className={styles.detailsContainer}>
                <aside>{aside}</aside>
                <section>{children}</section>
            </div>
        </main>
    );
};
