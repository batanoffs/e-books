import './dashbaord-layout.scss';

type MainLayoutProps = {
    children: Array<{
        id: string;
        element: JSX.Element;
    }>;
    styles?: string;
    header?: JSX.Element;
    aside?: JSX.Element;
};

export const DashboardLayout = ({ children, header, aside }: MainLayoutProps) => {
    return (
        <main className="dashboard-wrapper">
            <header>{header}</header>
            <div className="dashboard-container">
                <aside>{aside}</aside>
                <section>
                    {children && children.map((child) => <div key={child.id}>{child.element}</div>)}
                </section>
            </div>
        </main>
    );
};
