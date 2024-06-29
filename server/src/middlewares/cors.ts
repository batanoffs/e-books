import { Request, Response, NextFunction } from 'express';

function cors() {
    return function (req: Request, res: Response, next: NextFunction) {
        res.header('Access-Control-Allow-Origin', '*');

        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, X-Authorization'
        );

        next();
    };
}

export { cors };
