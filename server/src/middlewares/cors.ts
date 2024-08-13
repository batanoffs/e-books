import { Request, Response, NextFunction } from 'express'
import { XTotalCount } from '../constants/serverSetup'

function cors() {
	return function (req: Request, res: Response, next: NextFunction) {
		res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ADDRESS!)
		res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		res.setHeader('X-Total-Count', XTotalCount)

		if (req.method === 'OPTIONS') {
			res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
			res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
			return res.sendStatus(204)
		}

		next()
	}
}

export { cors }
