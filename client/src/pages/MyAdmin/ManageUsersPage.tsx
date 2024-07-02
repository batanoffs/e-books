import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    _id: string;
    email: string;
    role: 'user' | 'admin';
}

const ManageUsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('/api/admin/users');
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    const deleteUser = async (id: string) => {
        await axios.delete(`/api/admin/users/${id}`);
        setUsers(users.filter((user) => user._id !== id));
    };

    const toggleRole = async (id: string, role: 'user' | 'admin') => {
        const newRole = role === 'user' ? 'admin' : 'user';
        await axios.put(`/api/admin/users/${id}`, { role: newRole });
        setUsers(users.map((user) => (user._id === id ? { ...user, role: newRole } : user)));
    };

    return (
        <div>
            <h1>Manage Users</h1>
            <div>
                {users.map((user) => (
                    <div key={user._id}>
                        <h2>{user.email}</h2>
                        <p>Role: {user.role}</p>
                        <button onClick={() => toggleRole(user._id, user.role)}>
                            {user.role === 'admin' ? 'Revoke Admin' : 'Make Admin'}
                        </button>
                        <button onClick={() => deleteUser(user._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageUsersPage;
