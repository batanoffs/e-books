import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from './components/Header';
import HomePage from './pages/home/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/ReactAdmin/Admin';
// import AdminGuard from './middlewares/guards';

import './index.css';

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Montserrat Alternates',
            textTransform: 'none',
            fontSize: 14,
        },
    },
});

const routes = {
    '/': <HomePage />,
    '/books/:id': <BookDetailsPage />,
    '/login': <LoginPage />,
    '/register': <RegisterPage />,
    '/admin/*': <AdminPage />, //TODO add admin Guard
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                {!window.location.pathname.includes('admin') && <Header />}
                <Routes>
                    {Object.entries(routes).map(([path, element]) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
