const jwt = require('jsonwebtoken');

import { JwtPayload, SignOptions, verify } from 'jsonwebtoken';

import { secret } from '../constants/identity';

function createToken(userData: { email: string; _id: string }): string {
    const payload: JwtPayload = {
        username: userData.email,
        _id: userData._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET || secret, {
        expiresIn: '1h',
    } as SignOptions);

    return token;
}

function verifyToken(token: string): JwtPayload {
    const data = verify(token, secret) as JwtPayload;

    return data;
}

export { createToken, verifyToken };
