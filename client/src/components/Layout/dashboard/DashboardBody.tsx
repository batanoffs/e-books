interface DashboardBodyProps {
    items: Item[];
    CardComponent: React.ComponentType<React.PropsWithChildren<{ item: Item }>>;
}

interface Item {
    _id: string;
    [key: string]: unknown;
}

export const DashboardBody = ({ items, CardComponent }: DashboardBodyProps) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '0.5em' }}>
        {items.length > 0 ? (
            items.map((item) => <CardComponent key={item._id} item={item} />)
        ) : (
            <p>Няма намерени книги</p>
        )}
    </div>
);
