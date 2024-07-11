import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import BookDetailsPage from './pages/details/BookDetailsPage';
import LoginModal from './pages/login/LoginPage';
import Register from './pages/register/RegisterPage';
import AdminPage from './pages/ReactAdmin/Admin';
import { Layout } from './components/Layout/Layout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './index.scss';

const children = [
    { path: '/', element: <HomePage /> },
    { path: '/knigi/:id', element: <BookDetailsPage /> },
    { path: '/registracia', element: <Register /> },
];

const App = () => {
    return (
        <Router>
            {!window.location.pathname.includes('admin') && <Header />}
            <LoginModal />

            <main className="main-wrapper">
                {children.map((child) => (
                    <Layout key={child.path} child={child} />
                ))}
            </main>
            <Routes>
                <Route path="/admin/*" element={<AdminPage />} />
            </Routes>
            {!window.location.pathname.includes('admin') && <Footer />}
        </Router>
    );
};

export default App;
