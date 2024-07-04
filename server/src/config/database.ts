import mongoose, { Mongoose } from 'mongoose';
import { connectionString } from '../constants/serverSetup';

require('../models/Book');
require('../models/User');
require('../models/Order'); 
require('../models/Featured');
require('../models/Item');


mongoose.set('strictQuery', false);

async function configDatabase(mongooseInstance: Mongoose = mongoose): Promise<void> {
    try {
        await mongooseInstance.connect(connectionString);
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

export { configDatabase };
