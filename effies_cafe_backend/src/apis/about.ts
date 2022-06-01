import {Response} from 'express';
import AboutService from '../services/about_service';
import {TransactionalRequest} from '../database';



const aboutEndpoint = {
	listAbout: async (req: TransactionalRequest, res: Response) => {
		const pool = req.database.pool;

		const contents = await AboutService.listContent(pool);

		if (contents.length > 0) {
			return res.status(200).send(contents);
		}

		// not found
		return res.status(404).send();
	}
};

export {aboutEndpoint};
