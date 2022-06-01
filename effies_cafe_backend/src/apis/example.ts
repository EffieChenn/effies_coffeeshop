import {Response} from 'express';
import {TransactionalRequest} from '../database';
import ExampleService from '../services/example_service';

const exampleEndpoint = {
	listExample: async (req: TransactionalRequest, res: Response) => {
		const pool = req.database.pool;

		const items = await ExampleService.listItems(pool);

		if (items.length > 0) {
			return res.status(200).send(items);
		}

		// not found
		return res.status(404).send();
	}
};

export {exampleEndpoint};
