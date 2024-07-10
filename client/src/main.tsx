import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import themeOptions from './utils/theme';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={themeOptions.whiteTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
