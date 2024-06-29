import { Router } from 'express';

import appRouter from '../routes/appRoutes';

/**
 * Configures the routes for the application.
 *
 * @param {Router} app - The Express application instance.
 */
export function configRoutes(app: Router): void {
    app.use('/api', appRouter);
}

export default { configRoutes };
