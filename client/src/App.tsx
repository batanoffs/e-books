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
import TextBooksPage from './pages/books/TextBooksPage';

const App = () => {
    const { isLoading } = useSpinner();
    const isAdminLocation = window.location.pathname.startsWith('/admin');

    return (
        <Router>
            {!isAdminLocation && <Header />}
            {isLoading && <Spinner />}

            <LoginModal />
            <Routes>
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage path="книжарница / книги" />} />
                <Route path="/textbooks" element={<TextBooksPage path="книжарnica / учебнижци" />} />
                <Route path="/register" element={<Register />} />
                <Route path="/books/:id" element={<BookDetailsPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>

            {!isAdminLocation && <Footer />}
        </Router>
    );
};

export default App;

