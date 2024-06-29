import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import AdminPage from './pages/AdminPage';
import ManageBooksPage from './pages/ManageBooksPage';
import ManageOrdersPage from './pages/ManageOrdersPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import './index.css';
import { Header } from './components/Header';

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Montserrat Alternates',
            textTransform: 'none',
            fontSize: 14,
        },
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books/:id" element={<BookDetailsPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/admin/books" element={<ManageBooksPage />} />
                    <Route path="/admin/orders" element={<ManageOrdersPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
