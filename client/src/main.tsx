import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import themeOptions from './utils/helpers/theme';

import App from './App';
import './styles/index.scss';

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={themeOptions.whiteTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
