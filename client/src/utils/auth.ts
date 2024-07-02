const isGuest = (): boolean => {
    const token = getToken();
    return !token;
};

const isAuth = (): boolean => {
    return !isGuest();
};

const getToken = (): string | null => {
    return localStorage.getItem('token');
};

export { isGuest, isAuth, getToken };
