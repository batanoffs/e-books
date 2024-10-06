import { Admin, Resource } from 'react-admin'
import restProvider from './dataProvider'
import authProvider from './authProvider'

import API from '../../utils/constants/api'
import { OrdersList, OrdersEdit, OrdersShow, OrdersCreate } from './orders/index'
import { FeaturedList, FeaturedEdit, FeaturedShow, FeaturedCreate } from './featured/index'
import { BookList, BookEdit, BookShow, BookCreate } from './books/index'
import { TextbookList, TextbookEdit, TextbookShow, TextbookCreate } from './textbooks/index'
import { StationeryList, StationeryEdit, StationeryShow, StationeryCreate } from './stationery/index'
import { UserList, UserEdit, UserShow, UserCreate } from './users/index'
// import { CategoriesList, CategoriesEdit, CategoriesShow, CategoriesCreate } from './categories/index'
import { theme } from '../../utils/helpers/theme'

const dataProvider = restProvider(API.ADMIN)

export const AdminPage = () => (
	<Admin
		basename='/admin'
		dataProvider={dataProvider}
		authProvider={authProvider}
		theme={theme.themeOptions}
	>
		<Resource
			name='orders'
			list={OrdersList}
			edit={OrdersEdit}
			show={OrdersShow}
			create={OrdersCreate}
			options={{ label: 'Поръчки' }}
		/>
		<Resource
			name='featured'
			list={FeaturedList}
			edit={FeaturedEdit}
			show={FeaturedShow}
			create={FeaturedCreate}
			options={{ label: 'Промотирани' }}
		/>
		<Resource
			name='books'
			list={BookList}
			edit={BookEdit}
			show={BookShow}
			create={BookCreate}
			options={{ label: 'Книги' }}
		/>

		<Resource
			name='textbooks'
			list={TextbookList}
			edit={TextbookEdit}
			show={TextbookShow}
			create={TextbookCreate}
			options={{ label: 'Учебници' }}
		/>
		<Resource
			name='stationery'
			list={StationeryList}
			edit={StationeryEdit}
			show={StationeryShow}
			create={StationeryCreate}
			options={{ label: 'Канцелария' }}
		/>

		<Resource
			name='users'
			list={UserList}
			edit={UserEdit}
			show={UserShow}
			create={UserCreate}
			options={{ label: 'Потребители' }}
		/>
		{/* <Resource
			name='categories'
			list={CategoriesList}
			edit={CategoriesEdit}
			show={CategoriesShow}
			create={CategoriesCreate}
			options={{ label: 'Категорий' }}
		/> */}
	</Admin>
)
