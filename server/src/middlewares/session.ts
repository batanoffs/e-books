import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../services/jwt";

declare global {
    namespace Express {
        interface Request {
            user?: {
                username: string;
                _id: string;
            };
        }
    }
}

function session(): (req: Request, res: Response, next: NextFunction) => void {
    return function (req: Request, res: Response, next: NextFunction) {
        const token = req.cookies?.token;

        if (token) {
            try {
                const sessionData = verifyToken(token);
                req.user = {
                    username: sessionData.username,
                    _id: sessionData._id,
                };
                res.locals.hasUser = true;
            } catch (err) {
                res.clearCookie("token");
            }
        }

        next();
    };
}

export { session };

