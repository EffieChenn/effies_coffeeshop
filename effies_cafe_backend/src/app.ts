import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import morgan from 'morgan';
import {DatabaseMiddleware, TransactionalRequest} from './database';
import {common} from './apis/common';
import {exampleEndpoint} from './apis/example';
import {Pool} from 'pg';
import { menuEndpoint } from './apis/menu';
import { aboutEndpoint } from './apis/about';
import { contactEndpoint } from './apis/contact';

const prefix = '/api/v1';

export interface AppRequest extends TransactionalRequest {}

function buildApp(databaseConnection: Pool) {
	const databaseMiddleware = DatabaseMiddleware(databaseConnection);

	const app = express()
		.use(helmet())
		.use(cors())
		.use(
			morgan('tiny', {
				skip: (req, res) => req.url === '/health'
			})
		)
		.use(express.json())
		.use(databaseMiddleware.transactional())
		.use(function (err, req, res, next) {
			console.error(err.stack);
			res.status(500).send({status: 'Error'});
		})

		.get(`${prefix}/example`, exampleEndpoint.listExample)
		.get(`${prefix}/menu`, menuEndpoint.listMenu)
		.get(`${prefix}/about`, aboutEndpoint.listAbout)

		.get('/health', common.healthCheck)
		.get('*', common.notFound)

		.post(`${prefix}/contact`, contactEndpoint.addContact)

	app.options('*', cors());

	return app;
}

export {buildApp};
