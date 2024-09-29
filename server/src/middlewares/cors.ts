import { Request, Response, NextFunction } from 'express'
import { XTotalCount } from '../constants/serverSetup'

function cors() {
	return function (req: Request, res: Response, next: NextFunction) {
		const allowedOrigins = process.env.ALLOWED_ADDRESS!.split(',')
		const origin = req.header('Origin') ?? ''

		if (allowedOrigins.includes(origin?.trim())) {
			res.setHeader('Access-Control-Allow-Origin', origin) // Set the origin dynamically
			res.setHeader('Access-Control-Allow-Credentials', 'true') // Enable cookies and credentials
		} else {
			res.setHeader('Access-Control-Allow-Origin', '') // Block the origin if not allowed
		}

		res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count')
		res.setHeader('X-Total-Count', XTotalCount)

		if (req.method === 'OPTIONS') {
			res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
			res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
			return res.sendStatus(204) // End OPTIONS pre-flight requests
		}

		next()
	}
}

export { cors }
