const express = require('express');
const cookieParser = require('cookie-parser');
import { Express } from 'express';

import { secret } from '../constants/identity';
import { session } from '../middlewares/session';
import { cors } from '../middlewares/cors';

function configExpress(app: Express): void {
    app.use(cookieParser({ secret }));
    app.use(session());
    app.use(cors());

    //TODO check usage ?
    // app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
}

export { configExpress };
