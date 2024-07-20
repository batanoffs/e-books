import { Navigate } from 'react-router-dom';
import { checkIfUserIsAdmin } from '../utils/helpers/auth';
import AdminPage from '../pages/ReactAdmin/Admin';

const AdminGuard = () => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');

    const isAdmin = checkIfUserIsAdmin(); // Function to check if the user is an admin, you need to implement this

    if (!token || !isAdmin) {
        return <Navigate to="/login" />;
    }

    return <AdminPage />;
};

export default AdminGuard;
