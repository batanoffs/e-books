import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import BookDetailsPage from './pages/details/BookDetailsPage';
import LoginModal from './pages/login/LoginPage';
import Register from './pages/register/RegisterPage';
import AdminPage from './pages/ReactAdmin/Admin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './index.scss';
import NotFoundPage from './components/utils/404';
import Books from './pages/books/Books';
import { MainLayout } from './components/Layout/MainLayout';

const children = [
    { path: '/', element: <HomePage /> },
    { path: '/books', element: <Books /> },
    // { path: '/textbooks', element:  },
    { path: '/books/:id', element: <BookDetailsPage /> },
    { path: '/register', element: <Register /> },
    { path: '*', element: <NotFoundPage /> },
];

const App = () => {
    return (
        <Router>
            {!window.location.pathname.includes('admin') && <Header />}
            <LoginModal />

            <MainLayout children={children} />
            <Routes>
                <Route path="/admin/*" element={<AdminPage />} />
            </Routes>
            {!window.location.pathname.includes('admin') && <Footer />}
        </Router>
    );
};

export default App;
