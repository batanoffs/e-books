import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import AdminPage from './pages/AdminPage';
import ManageBooksPage from './pages/ManageBooksPage';
import ManageOrdersPage from './pages/ManageOrdersPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App: React.FC = () => {
  return (
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
  );
};

export default App;
