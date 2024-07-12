import { Layout } from './Layout';

type MainLayoutProps = {
    children: Array<{ path: string; element: React.ReactNode }>;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <main className="main-wrapper">
            {children.map((child) => (
                <Layout key={child.path} child={child} />
            ))}
        </main>
    );
};
