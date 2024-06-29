import { Error as ErrorType } from 'mongoose';

function parseError(err: Error) {
    if (err instanceof Error) {
        if (!('errors' in err)) {
            // Generic error
            return Object.assign(err, { errors: { error: err.message } });
        } else {
            // Mongoose validation error
            const error: ErrorType = new Error('Input validation error') as ErrorType;
            error.errors = Object.fromEntries(
                Object.values(err.errors).map(e => [e.path, e.message])
            );

            return error;
        }
    } else if (Array.isArray(err)) {
        // Express-validator error array
        const error: ErrorType = new Error('Input validation error') as ErrorType;
        error.errors = Object.fromEntries(err.map(e => [e.path, e.msg]));

        return error;
    }

    return err as ErrorType;
}

export { parseError };
