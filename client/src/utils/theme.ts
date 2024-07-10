import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Montserrat Alternates',
            textTransform: 'none',
            fontSize: 14,
        },
    },
    shape: {
        borderRadius: 10,
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff',
            light: '#fff',
            dark: '#c0c0c0',
            contrastText: '#000',
        },
        secondary: {
            main: '#fff',
            light: '#fff',
            dark: '#c0c0c0',
            contrastText: '#000',
        },
        background: {
            paper: '#212121',
            default: '#121212',
        },
    },
});

const whiteTheme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Montserrat Alternates',
            textTransform: 'none',
            fontSize: 14,
        },
    },
    shape: {
        borderRadius: 10,
    },
    palette: {
        primary: {
            main: '#fff',
            light: '#fdfdff',
            dark: '#e5e5e5',
            contrastText: '#555',
        },
        secondary: {
            main: '#f5f5f5',
            light: '#edeeef',
            dark: '#dcdcf0',
            contrastText: '#555',
        },
        success: {
            main: '#e5fafa',
            light: '#d9f1f1',
            dark: '#bcdcf0',
            contrastText: '#555',
        },
        error: {
            main: '#fdecec',
            light: '#fedce0',
            dark: '#fcd7c0',
            contrastText: '#555',
        },
        warning: {
            main: '#fff9e6',
            light: '#fff2d3',
            dark: '#fcd7c0',
            contrastText: '#555',
        },
        info: {
            main: '#e1f6f9',
            light: '#c9eaf8',
            dark: '#bcdcf0',
            contrastText: '#555',
        },
        background: {
            paper: '#fff',
            default: '#f5f5f5',
        },
    },
});

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const themeOptions = {
    darkTheme,
    whiteTheme,
    isDarkMode,
};

export default themeOptions;
