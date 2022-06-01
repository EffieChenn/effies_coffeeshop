import {Response} from 'express';
import {TransactionalRequest} from '../database';
import ContactService from '../services/contact_service';

const contactEndpoint = {
	addContact: async (req: TransactionalRequest, res: Response) => {
		const pool = req.database.pool;
		const name = req.body.name;
		const email = req.body.email;
		const msg = req.body.message;
		const contact = await ContactService.addContact(name, email, msg, pool);

		//console.log(name, email, msg);
		
		if (contact.length > 0 ) {
			return res.status(200).send(contact);
		}
		// not found
		return res.status(404).send();
	}
};

export {contactEndpoint};
