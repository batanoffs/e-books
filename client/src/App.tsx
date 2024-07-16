import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import BookDetailsPage from './pages/details/BookDetailsPage';
import LoginModal from './pages/login/LoginPage';
import Register from './pages/register/RegisterPage';
import AdminPage from './pages/ReactAdmin/Admin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFoundPage from './components/utils/404';
import BooksPage from './pages/books/BooksPage';
import { useSpinner } from './store/utils';
import Spinner from './components/utils/Spinner';
import TextBooksPage from './pages/books/TextBooksPage';

const App = () => {
    const { isLoading } = useSpinner();

    return (
        <Router>
            {!window.location.pathname.includes('admin') && <Header />}
            {isLoading && <Spinner />}

            <LoginModal />
            <Routes>
                <Route path="/admin/*" element={<AdminPage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/textbooks" element={<TextBooksPage />} />
                <Route path="/books/:id" element={<BookDetailsPage />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            {!window.location.pathname.includes('admin') && <Footer />}
        </Router>
    );
};

export default App;
