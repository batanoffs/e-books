import { RequestHandler, Request, Response, NextFunction } from 'express';

const isUser = (): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            res.redirect('/login');
        } else {
            next();
        }
    };
};

const isGuest = (): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.user) {
            res.redirect('/');
        } else {
            next();
        }
    };
};

export { isUser, isGuest };
