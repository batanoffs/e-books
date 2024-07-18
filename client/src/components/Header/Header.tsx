import React, { useState } from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Logo from '../assets/Logo';
import NavigationMenu from './NavMenu';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import { API } from '../../constants/api';

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleLogout = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.get(API.LOGOUT);
            document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            navigate('/');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    const navigationHandler = (page: string) => {
        switch (page) {
            case 'Книги':
                navigate('/books');
                break;
            case 'Учебници':
                navigate('/textbooks');
                break;
            case 'Най-продавани':
                navigate('/popular');
                break;
            case 'Контакти':
                navigate('/contacts');
                break;
            case 'Всички':
                navigate('/all-products');
                break;
            default:
                navigate('/');
                break;
        }
    };

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar variant="dense" sx={{ height: 80 }} disableGutters>
                    <Logo />
                    <NavigationMenu
                        anchorElNav={anchorElNav}
                        handleOpenNavMenu={handleOpenNavMenu}
                        handleCloseNavMenu={handleCloseNavMenu}
                        navigationHandler={navigationHandler}
                    />
                    <SearchBar handleSearchInputChange={handleSearchInputChange} />
                    <UserMenu
                        anchorElUser={anchorElUser}
                        handleOpenUserMenu={handleOpenUserMenu}
                        handleCloseUserMenu={handleCloseUserMenu}
                        handleLogout={handleLogout}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
