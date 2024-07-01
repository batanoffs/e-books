const express = require('express');
const dotenv = require('dotenv');

import { configDatabase } from './src/config/database';
import { configExpress } from './src/config/express';
import { configRoutes } from './src/config/routes';
import { PORT } from './src/constants/serverSetup';

dotenv.config();
const app = express();

try {
    configExpress(app);
    configDatabase();
    configRoutes(app);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.error('Server connection error:', error);
}
