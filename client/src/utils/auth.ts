const isGuest = (): boolean => {
    const token = getToken();
    return !token;
};

const isAuth = (): boolean => {
    return !isGuest();
};

const getToken = (): string | undefined => {
    return document.cookie
        .split(';')
        .map((cookie) => cookie.trim())
        .find((cookie) => cookie.startsWith('token='))
        ?.split('=')[1];
};

const getUserRole = async () => {
    const token = getToken();
    if (!token) {
        return null;
    }
    //TODO decode token
    const decodedToken = jwt_decode<{ role: string }>(token);
    
    return decodedToken.role;
};

const checkIfUserIsAdmin = () => {
    const userRole = getUserRole(); // Get user role

    return userRole === "admin"; // Check if user has admin role
};

export { isGuest, isAuth, getToken, checkIfUserIsAdmin };
