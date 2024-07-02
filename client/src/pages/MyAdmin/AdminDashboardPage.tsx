// frontend/src/pages/AdminDashboardPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboardPage: React.FC = () => {
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
                </ul>
            </nav>
        </div>
    );
};

export default AdminDashboardPage;
