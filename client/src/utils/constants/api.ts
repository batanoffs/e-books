const baseURL = import.meta.env.VITE_SERVER_BASE_URL

const API = {
	LOGIN: baseURL + '/api/login/',
	LOGOUT: baseURL + '/api/logout/',
	REGISTER: baseURL + '/api/register/',
	BOOKS: baseURL + '/api/books/',
	TEXTBOOKS: baseURL + '/api/textbooks/',
	STATIONERY: baseURL + '/api/stationery/',
	CATEGORIES: baseURL + '/api/categories/',
	ORDERS: baseURL + '/api/orders/',
	USERS: baseURL + '/api/users/',
	USER_ID: baseURL + '/api/users/verify-user',
	CART: baseURL + '/api/cart/',
	ADMIN: baseURL + '/api/admin/',
	CHECKOUT: baseURL + '/api/checkout/',
	WISHLIST: baseURL + '/api/wishlist/',
	NEWSLETTER: baseURL + '/api/newsletter',
}

export default API
