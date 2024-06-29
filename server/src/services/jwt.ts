import jwt, { JwtPayload, SignOptions, verify } from 'jsonwebtoken';
import { secret } from '../constants/identity';

export function createToken(userData: { username: string; _id: string }): string {
    const payload: JwtPayload = {
        username: userData.username,
        _id: userData._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET || secret, {
        expiresIn: '1h',
    } as SignOptions);

    return token;
}

export function verifyToken(token: string): JwtPayload {
    const data = verify(token, secret) as JwtPayload;

    return data;
}
