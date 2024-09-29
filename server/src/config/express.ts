import { Express } from 'express'
import { session } from '../middlewares/session'
import { cors } from '../middlewares/cors'

const express = require('express')
const cookieParser = require('cookie-parser')
const cookieOptions = {
	secure: true, // allows cookies to be sent over HTTPS
	httpOnly: true, // prevents JavaScript from accessing cookies
}
function configExpress(app: Express): void {
	app.use(cookieParser(process.env.JWT_SECRET, cookieOptions))
	app.use(session())
	app.use(cors())
	app.use(express.json())
}

export { configExpress }
