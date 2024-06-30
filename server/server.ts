const express = require('express');
const dotenv = require('dotenv');

import { configDatabase } from './src/config/database';
import { configExpress } from './src/config/express';
import { configRoutes } from './src/config/routes';

dotenv.config();

const PORT = process.env.PORT || 5000;
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
