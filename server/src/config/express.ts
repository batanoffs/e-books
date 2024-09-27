import { Express } from 'express'
import { session } from '../middlewares/session'
import { cors } from '../middlewares/cors'

const express = require('express')
const cookieParser = require('cookie-parser')

function configExpress(app: Express): void {
	app.use(cookieParser(process.env.JWT_SECRET))
	app.use(session())
	app.use(cors());
	app.use(express.json())
}

export { configExpress }
