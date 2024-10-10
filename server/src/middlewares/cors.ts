import cors from 'cors'
import { Request, Response, NextFunction } from 'express'
import { XTotalCount } from '../constants/serverSetup'

// Custom CORS configuration function
function corsConfig() {
	const corsOptions = {
		origin: function (
			origin: string | undefined,
			callback: (err: Error | null, allow?: boolean) => void
		) {
			const allowedOrigins = process.env.ALLOWED_ADDRESS!.split(',')
			if (!origin || allowedOrigins.includes(origin.trim())) {
				callback(null, true)
			} else {
				callback(new Error('Not allowed by CORS'))
			}
		},
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Credentials'],
		exposedHeaders: ['X-Total-Count'],
		optionsSuccessStatus: 200 // For legacy browser support
	}

	// CORS middleware
	const corsMiddleware = cors(corsOptions)

	// Custom middleware for handling headers
	const customMiddleware = function (req: Request, res: Response, next: NextFunction): void {
		res.setHeader('X-Total-Count', XTotalCount)

		if (req.method === 'OPTIONS') {
			res.sendStatus(204)
			return
		}

		next()
	}

	return { corsMiddleware, customMiddleware }
}

export { corsConfig }
