import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { Layout } from './Layout';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';

const AdminPage = () => (
    <Admin layout={Layout} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="/admin/dashboard" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="/admin/users" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="/admin/orders" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="/admin/books" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="/admin/items" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="/admin/featured" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
);

export { AdminPage };
