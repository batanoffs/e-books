import { Routes, Route } from 'react-router-dom';

import styles from './layout.module.scss';

type LayoutProps = {
    child: { path: string; element: React.ReactNode };
};

export const Layout = ({ child }: LayoutProps) => {
    return (
        <section className={styles.wrapper}>
            <Routes>
                <Route path={child.path} element={child.element} />
            </Routes>
        </section>
    );
};
