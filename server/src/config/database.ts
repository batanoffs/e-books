import mongoose, { Mongoose } from 'mongoose';

require('../models/Book');
require('../models/User');
require('../models/Order'); //TODO import specific model and change name
//TODO import models

mongoose.set('strictQuery', false);

async function configDatabase(mongooseInstance: Mongoose = mongoose): Promise<void> {
    const connectionString = process.env.MONGO_URI || 'mongodb://localhost:27017/bookstore';

    await mongooseInstance.connect(connectionString);

    console.log('Database connected');
}

export { configDatabase };
