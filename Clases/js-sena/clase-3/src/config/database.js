import 'dotenv/config';
import mysql2 from 'mysql2/promise';

export const config = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'developer',
    password: process.env.DB_PASSWORD || 'developer',
    database: process.env.DB_NAME || 'library_db'
};

export const pool = mysql2.createPool(config);