import './details-layout.scss';

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
            <div className="details-container">
                <aside>{aside}</aside>
                <section>{children}</section>
            </div>
        </main>
    );
};