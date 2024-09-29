import express, { Express } from 'express'
import { session } from '../middlewares/session'
import { corsConfig } from '../middlewares/cors'

const cookieParser = require('cookie-parser')
const cookieOptions = {
	secure: true, // allows cookies to be sent over HTTPS
	httpOnly: true, // prevents JavaScript from accessing cookies
}
function configExpress(app: Express): void {
	app.use(cookieParser(process.env.JWT_SECRET, cookieOptions))
	app.use(session())
	const { corsMiddleware, customMiddleware } = corsConfig()

	// Apply them one after another
	app.use(corsMiddleware) // Apply CORS middleware
	app.use(customMiddleware) // Apply custom header middleware
	app.use(express.json())
}

export { configExpress }
