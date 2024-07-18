import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { useSpinner } from './store/utils';
import Spinner from './components/utils/Spinner';
import HomePage from './pages/home/HomePage';
import BookDetailsPage from './pages/details/BookDetailsPage';
import LoginModal from './pages/login/LoginPage';
import Register from './pages/register/RegisterPage';
import AdminPage from './pages/ReactAdmin/Admin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFoundPage from './components/utils/404';
import BooksPage from './pages/books/BooksPage';
import TextBooksPage from './pages/textbooks/TextBooksPage';
import TextBookDetailsPage from './pages/textbooks/TextBookDetailsPage';
import StationeryPage from './pages/stationery/StationeryPage';
import StationeryDetailsPage from './pages/stationery/StationeryDetailsPage';
import CartPage from './pages/cart/CartPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import OrdersConfirmationPage from './pages/orders/OrdersConfirmationPage';
import OrderDetailsPage from './pages/orders/OrderDetailsPage';
import FaqPage from './pages/faq/FaqPage'
import ContactsPage from './pages/contacts/ContactsPage';
import AboutPage from './pages/about/AboutPage';
import PopularPage from './pages/popular/PopularPage';

const App = () => {
    const { isLoading } = useSpinner();
    const isAdminLocation = window.location.pathname.startsWith('/admin');

    return (
        <Router>
            {!isAdminLocation && <Header />}
            {isLoading && <Spinner />}

            <LoginModal />
            <Routes>
                <Route path="/admin/*" element={<AdminPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage path="книжарница / книги" />} />
                <Route path="/books/:id" element={<BookDetailsPage />} />
                <Route path="/textbooks" element={<TextBooksPage path="книжарnica / учебнижци" />} />
                <Route path="/textbooks/:id" element={<TextBookDetailsPage />} />
                <Route path="/stationery" element={<StationeryPage path="книжарница / канцелария" />} />
                <Route path="/stationery/:id" element={<StationeryDetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/orders" element={<OrdersConfirmationPage />} />
                <Route path="/orders/:id" element={<OrderDetailsPage />} />
                <Route path='/popular' element={<PopularPage/>} />
                {/* <Route path="/profile" element={<ProfilePage />} /> */}
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>

            {!isAdminLocation && <Footer />}
        </Router>
    );
};

export default App;

