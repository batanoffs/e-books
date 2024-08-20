const baseURL = 'http://localhost:5001'

const API = {
	LOGIN: baseURL + '/api/login/',
	LOGOUT: baseURL + '/api/logout/',
	REGISTER: baseURL + '/api/register/',
	BOOKS: baseURL + '/api/books/',
	TEXTBOOKS: baseURL + '/api/textbooks/',
	STATIONERY: baseURL + '/api/stationery/',
	CATEGORIES: baseURL + '/api/category/',
	ORDERS: baseURL + '/api/orders/',
	USERS: baseURL + '/api/users/',
	USER_ID: baseURL + '/api/users/user-id',
	CART: baseURL + '/api/cart/',
	ADMIN: baseURL + '/api/admin/',
	CHECKOUT: baseURL + '/api/checkout/',
	WISHLIST: baseURL + '/api/wishlist/',
}

export default API
