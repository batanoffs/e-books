import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import HomePage from './pages/home/HomePage';
import BookDetailsPage from './pages/details/BookDetailsPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import AdminPage from './pages/ReactAdmin/Admin';
import Header from './components/appBar/AppBar';
// import AdminGuard from './middlewares/guards';
import themeOptions from './utils/theme';
import Footer from './components/Footer/Footer'
import './index.scss';

const routes = {
    '/': <HomePage />,
    '/books/:id': <BookDetailsPage />,
    '/login': <LoginPage />,
    '/register': <RegisterPage />,
    '/admin/*': <AdminPage /> /*TODO add admin Guard */,
};

const App = () => {
    return (
        <ThemeProvider theme={themeOptions.theme}>
            <Router>
                {!window.location.pathname.includes('admin') && <Header />}
                <Routes>
                    {Object.entries(routes).map(([path, element]) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Router>
            {!window.location.pathname.includes('admin') && <Footer />}
        </ThemeProvider>
    );
};

export default App;
