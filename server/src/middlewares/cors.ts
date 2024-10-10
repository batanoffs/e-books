import cors from 'cors'
import { Request, Response, NextFunction } from 'express'
import { XTotalCount } from '../constants/serverSetup'

// Custom CORS configuration function
function corsConfig() {
	// Core CORS middleware configuration
	const corsOptions = {
		origin: function (
			origin: string | undefined,
			callback: (err: Error | null, allow?: boolean) => void
		) {
			const allowedOrigins = process.env.ALLOWED_ADDRESS!.split(',')
			if (!origin || allowedOrigins.includes(origin.trim())) {
				callback(null, true) // Allow the origin
			} else {
				callback(new Error('Not allowed by CORS')) // Block the origin
			}
		},
		credentials: true, // Allow cookies and credentials
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Allowed methods
		allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Credentials'], // Allowed headers
		exposedHeaders: ['X-Total-Count'], // Expose custom headers
	}

	// CORS middleware
	const corsMiddleware = cors(corsOptions)

	// Custom middleware for handling headers
	const customMiddleware = function (req: Request, res: Response, next: NextFunction): void {
		res.setHeader('X-Total-Count', XTotalCount)

		if (req.method === 'OPTIONS') {
			res.sendStatus(204) // End pre-flight request handling
			return // Exit the middleware early
		}

		next() // Proceed to the next middleware or route handler
	}

	return { corsMiddleware, customMiddleware }
}

export { corsConfig }
