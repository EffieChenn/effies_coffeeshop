import {Response} from 'express';
import MenuService from '../services/menu_service';
import {TransactionalRequest} from '../database';



const menuEndpoint = {
	listMenu: async (req: TransactionalRequest, res: Response) => {
		const pool = req.database.pool;

		const items = await MenuService.listItems(pool);

		if (items.length > 0) {
			return res.status(200).send(items);
		}

		// not found
		return res.status(404).send();
	}
};

export {menuEndpoint};
