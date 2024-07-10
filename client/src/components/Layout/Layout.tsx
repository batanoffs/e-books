import styles from './layout.module.scss';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <main>
            <section className={styles.wrapper}>{children}</section>
        </main>
    );
};

export default Layout;
