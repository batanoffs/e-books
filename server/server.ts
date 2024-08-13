const express = require('express');
const dotenv = require('dotenv');
import { configDatabase } from './src/config/database';
import { configExpress } from './src/config/express';
import { configRoutes } from './src/config/routes';

// import { registerUser } from './src/services/user';
// import { createToken } from './src/services/jwt';

dotenv.config();
const app = express();

try {
    configExpress(app);
    configDatabase();
    configRoutes(app);
   
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });

    // test();
} catch (error) {
    console.error('Server connection error:', error);
}

// async function test() {
//     try {
//         const result = await registerUser('admin@email.com', 'password', 'admin');
//         // const result = await login("daniel@gmail.com", "123456");

//         console.log(result);

//         const token = createToken(result);
//         console.log(token);
//     } catch (error: any) {
//         console.error(`Caught Error: ${error.message}`);
//     }
// }
