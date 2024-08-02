import { defaultTheme } from 'react-admin';

// Function to create light and dark mode themes
export const myTheme = {
    typography: {
        fontFamily: ['Montserrat Alternates', 'Arial', 'sans-serif'].join(','),
    },
    components: {
        ...defaultTheme.components,
        MuiTextField: {
            defaultProps: {
                variant: 'outlined' as const,
            },
        },
        MuiFormControl: {
            defaultProps: {
                variant: 'outlined' as const,
            },
        },
        MuiList: {
            defaultProps: {
                dense: true,
            },
        },
        MuiTable: {
            defaultProps: {
                size: 'small',
            },
        },
    },
};
