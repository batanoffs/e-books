type MainLayoutProps = {
    children: Array<{
        id: string;
        element: JSX.Element;
    }>;
};

const HomeLayout = ({ children }: MainLayoutProps) => {
    return (
        <main className="main-wrapper">
            {children &&
                children.map((child) => (
                    <section key={child.id} style={{ padding: '0 60px' }}>
                        {child.element}
                    </section>
                ))}
        </main>
    );
};

export default HomeLayout;
