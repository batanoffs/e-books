import mongoose, { Mongoose } from 'mongoose'

require('../models/Book')
require('../models/Featured')
require('../models/Order')
require('../models/Cart')
require('../models/Stationery')
require('../models/Textbook')
require('../models/User')

mongoose.set('strictQuery', false)

async function configDatabase(mongooseInstance: Mongoose = mongoose): Promise<void> {
	try {
		await mongooseInstance.connect(process.env.MONGO_URI as string)
	} catch (error) {
		console.error('Database connection error:', error)
	}
}

export { configDatabase }
