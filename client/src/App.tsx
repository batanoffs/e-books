import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import BookDetailsPage from './pages/details/BookDetailsPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import AdminPage from './pages/ReactAdmin/Admin';
import Header from './components/appBar/Header';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
// import AdminGuard from './middlewares/guards';

import './index.scss';

const routes = {
    '/': <HomePage />,
    '/books/:id': <BookDetailsPage />,
    '/login': <LoginPage />,
    '/register': <RegisterPage />,
};

const App = () => {
    return (
        <Router>
            {!window.location.pathname.includes('admin') && <Header />}
            <Layout>
                <Routes>
                    {Object.entries(routes).map(([path, element]) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Layout>

            {!window.location.pathname.includes('admin') && <Footer />}

            <Routes>
                <Route path="/admin/*" element={<AdminPage />} />
            </Routes>
        </Router>
    );
};

export default App;
