// global configuration goes here

import dotenv from 'dotenv';

dotenv.config();

const CONFIG = {
	LISTEN_PORT: 6005,

	DEVELOPMENT_MODE: true,

	DB_NAME: process.env.DB_DATABASE,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_HOST: process.env.DB_HOST,
	DB_PORT: parseInt(process.env.DB_PORT)
};

export {CONFIG};
