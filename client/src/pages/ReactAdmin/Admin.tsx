import { Admin, Resource } from 'react-admin';
import restProvider from './dataProvider2';
import authProvider from './authProvider';
import BookList from './books/List';
import BookEdit from './books/Edit';
import BookShow from './books/Show';
import BookCreate from './books/Create';
import UserList from './users/List';
import UserEdit from './users/Edit';
import UserShow from './users/Show';
import UserCreate from './users/Create';
import OrdersList from './orders/List';
import OrdersEdit from './orders/Edit';
import OrdersShow from './orders/Show';
import OrdersCreate from './orders/Create';
import TextbookList from './textbooks/List';
import TextbookEdit from './textbooks/Edit';
import TextbookShow from './textbooks/Show';
import TextbookCreate from './textbooks/Create';
import ItemsList from './items/List';
import ItemsEdit from './items/Edit';
import ItemsShow from './items/Show';
import ItemsCreate from './items/Create';
import FeaturedList from './featured/List';
import FeaturedEdit from './featured/Edit';
import FeaturedShow from './featured/Show';
import FeaturedCreate from './featured/Create';
import { myTheme } from './theme';

const apiUrl = 'http://localhost:5001/api/admin';
const dataProvider = restProvider(apiUrl);

const AdminPage = () => (
    <Admin basename="/admin" dataProvider={dataProvider} authProvider={authProvider} theme={myTheme}>
        <Resource
            name="orders"
            list={OrdersList}
            edit={OrdersEdit}
            show={OrdersShow}
            create={OrdersCreate}
            options={{ label: 'Поръчки' }}
        />
        <Resource
            name="books"
            list={BookList}
            edit={BookEdit}
            show={BookShow}
            create={BookCreate}
            options={{ label: 'Книги' }}
        />

        <Resource
            name="textbooks"
            list={TextbookList}
            edit={TextbookEdit}
            show={TextbookShow}
            create={TextbookCreate}
            options={{ label: 'Учебници' }}
        />
        <Resource
            name="items"
            list={ItemsList}
            edit={ItemsEdit}
            show={ItemsShow}
            create={ItemsCreate}
            options={{ label: 'Канцелария' }}
        />
        <Resource
            name="featured"
            list={FeaturedList}
            edit={FeaturedEdit}
            show={FeaturedShow}
            create={FeaturedCreate}
            options={{ label: 'Промотирани' }}
        />
        <Resource
            name="users"
            list={UserList}
            edit={UserEdit}
            show={UserShow}
            create={UserCreate}
            options={{ label: 'Потребители' }}
        />
    </Admin>
);

export default AdminPage;
