import { JwtPayload, SignOptions, verify, sign } from 'jsonwebtoken'
import { tokenExpiration } from '../constants/serverSetup'
import { secret } from '../constants/identity'

function createToken(userData: { email: string; _id?: string }): string {
	const payload: JwtPayload = {
		email: userData.email,
		_id: userData._id,
	}

	const token = sign(payload, process.env.JWT_SECRET || secret, {
		expiresIn: tokenExpiration,
	} as SignOptions)

	return token
}

function verifyToken(token: string): JwtPayload {
	const data = verify(token, secret) as JwtPayload

	return data
}

export { createToken, verifyToken }
