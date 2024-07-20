import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { useSpinner } from './store/utils';
import Spinner from './components/utils/Spinner';
import HomePage from './pages/Home/HomePage';
import BookDetailsPage from './pages/Details/BookDetailsPage';
import LoginModal from './pages/Login/LoginPage';
import Register from './pages/Register/RegisterPage';
import AdminPage from './pages/ReactAdmin/Admin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFoundPage from './components/utils/404';
import BooksPage from './pages/Books/BooksPage';
import TextBooksPage from './pages/Textbooks/TextBooksPage';
import TextBookDetailsPage from './pages/Textbooks/TextBookDetailsPage';
import StationeryPage from './pages/Stationery/StationeryPage';
import StationeryDetailsPage from './pages/Stationery/StationeryDetailsPage';
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import OrdersConfirmationPage from './pages/Orders/OrdersConfirmationPage';
import OrderDetailsPage from './pages/Orders/OrderDetailsPage';
import FaqPage from './pages/Faq/FaqPage';
import ContactsPage from './pages/Contacts/ContactsPage';
import AboutPage from './pages/About/AboutPage';
import PopularPage from './pages/Popular/PopularPage';

const App = () => {
    const { isLoading } = useSpinner();
    const adminLocation = window.location.pathname?.includes('admin');

    return (
        <Router>
            {!adminLocation && <Header />}
            {isLoading && <Spinner />}

            <LoginModal />
            <Routes>
                <Route path="/admin/*" element={<AdminPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage path="книжарница / книги" />} />
                <Route path="/books/:id" element={<BookDetailsPage />} />
                <Route path="/textbooks" element={<TextBooksPage path="книжарnica / учебнижци" />} />
                <Route path="/textbooks/:id" element={<TextBookDetailsPage />} />
                <Route element={<StationeryPage path="книжарница / канцелария" />} path="/stationery" />
                <Route path="/stationery/:id" element={<StationeryDetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/orders" element={<OrdersConfirmationPage />} />
                <Route path="/orders/:id" element={<OrderDetailsPage />} />
                <Route path="/popular" element={<PopularPage />} />
                {/* <Route path="/profile" element={<ProfilePage />} /> */}
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>

            {!adminLocation && <Footer />}
        </Router>
    );
};

export default App;
