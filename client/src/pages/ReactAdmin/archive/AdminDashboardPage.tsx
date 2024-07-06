// frontend/src/pages/AdminDashboardPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../../constants/api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboardPage: React.FC = () => {
    const navigate = useNavigate();
    const handleLogout = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.get(API.LOGOUT);
            // console.log('Cookies:', response.headers['set-cookie']);

            document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            navigate('/');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/admin/books">Manage Books</Link>
                    </li>
                    <li>
                        <Link to="/admin/users">Manage Users</Link>
                    </li>
                    <li>
                        <Link to="/admin/orders">Manage Orders</Link>
                    </li>
                    <li>
                        <Link to="/admin/orders">Manage Orders</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminDashboardPage;

