import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useSpinner } from './store/utils';
import Spinner from './components/utils/Spinner';
import HomePage from './pages/Home/HomePage';
import LoginModal from './pages/Login/LoginPage';
import Register from './pages/Register/RegisterPage';
import AdminPage from './pages/ReactAdmin/Admin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFoundPage from './components/utils/404';
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import OrdersConfirmationPage from './pages/Orders/OrdersConfirmationPage';
import OrderDetailsPage from './pages/Orders/OrderDetailsPage';
import FaqPage from './pages/Faq/FaqPage';
import ContactsPage from './pages/Contacts/ContactsPage';
import AboutPage from './pages/About/AboutPage';
import PopularPage from './pages/Popular/PopularPage';
import CatalogPage from './pages/Catalog/CatalogPage';

const App = () => {
    const { isLoading } = useSpinner();
    const isAdminLocation = window.location.pathname?.toLowerCase().includes('admin');

    return (
        <Router>
            {!isAdminLocation && <Header />}
            {isLoading && <Spinner />}

            <LoginModal />
            <Routes>
                <Route path="/admin/*" element={<AdminPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog/*" element={<CatalogPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/orders" element={<OrdersConfirmationPage />} />
                <Route path="/orders/:id" element={<OrderDetailsPage />} />
                <Route path="/popular" element={<PopularPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFoundPage />} />
                {/* <Route path="/profile" element={<ProfilePage />} /> */}
            </Routes>

            {!isAdminLocation && <Footer />}
        </Router>
    );
};

export default App;
