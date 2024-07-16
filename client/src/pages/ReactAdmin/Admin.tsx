import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import restProvider from './dataProvider2';
import authProvider from './authProvider';
import BookList from './books/BookList';
import BookEdit from './books/BookEdit';
import BookShow from './books/BookShow';
import BookCreate from './books/BookCreate';

const apiUrl = 'http://localhost:5001/api/admin';
const dataProvider = restProvider(apiUrl);

const AdminPage = () => (
    <Admin basename="/admin" dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="orders" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="books" list={BookList} edit={BookEdit} show={BookShow} create={BookCreate} />
        <Resource name="textbooks" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="items" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="featured" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
);

export default AdminPage;
