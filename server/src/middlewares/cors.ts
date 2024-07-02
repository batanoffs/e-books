import { Request, Response, NextFunction } from 'express';
import { ALLOWED_ADDRESS } from '../constants/serverSetup';

function cors() {
    return function (req: Request, res: Response, next: NextFunction) {
        res.setHeader('Access-Control-Allow-Origin', ALLOWED_ADDRESS);

        if (req.method === 'OPTIONS') {
            res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            return res.sendStatus(204);
        }

        next();
    };
}

export { cors };

