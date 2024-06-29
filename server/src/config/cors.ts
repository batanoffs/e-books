import { Express } from 'express';
import { CorsOptions } from 'cors';
const cors = require('cors');
const express = require('express');

const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

export const configCors = (app: Express) => {
    app.use(cors(corsOptions));
    app.use(express.json());
};
