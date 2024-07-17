import './dashboard-layout.scss';

import { DashboardHeader } from './DashboardHeader';
import { DashboardNavigationAndFilters } from './DashboardNavigationAndFilters';

type MainLayoutProps = {
    children: Array<{
        id: string;
        element: JSX.Element;
    }>;
    path: string;
};

export const DashboardLayout = ({ children, path }: MainLayoutProps) => {
    return (
        <main className="main-wrapper">
            <header>
                <DashboardHeader path={path} />
            </header>
            <div className="dashboard-container">
                <aside>
                    <DashboardNavigationAndFilters />
                </aside>
                <section>
                    {children && children.map((child) => <div key={child.id}>{child.element}</div>)}
                </section>
            </div>
        </main>
    );
};