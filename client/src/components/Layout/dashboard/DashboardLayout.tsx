import './dashboard-layout.scss';

type MainLayoutProps = {
    path: string;
    header: JSX.Element;
    aside: JSX.Element;
    [key: string]: any;
};

//TODO improve dynamic pipelines for sidebar filters and header
export const DashboardLayout = ({ children, header, aside, path, ...props }: MainLayoutProps) => {
    return (
        <main className="main-wrapper">
            <header>{header}</header>
            <div className="dashboard-container">
                <aside>{aside}</aside>
                <section>{children}</section>
            </div>
        </main>
    );
};
