// Logo.tsx
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();

    return (
        <>
            <Box
                component="img"
                src="/1.png"
                alt="Logo"
                onClick={() => navigate('/')}
                sx={{ display: { xs: 'none', md: 'flex', cursor: 'pointer' }, mr: 5, height: 70 }}
            />
            {/* <Typography
                variant="h6"
                noWrap
                component="a"
                
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Montserrat Alternates',
                    fontWeight: 900,
                    letterSpacing: '.3rem',
                    color: 'blueviolet',
                    textDecoration: 'none',
                    cursor: 'pointer',
                }}
            >
                нов човек
            </Typography> */}
        </>
    );
};

export default Logo;