
const ContactService = {
	addContact: async (name, email, msg, pool) => {
		
		console.log(name, email, msg);

		const queryResult = await pool.query("INSERT INTO contact (name, email, message) VALUES ($1, $2, $3) RETURNING *",[
			name,
			email,
			msg
		]);

		//console.log(queryResult);

		return queryResult.rows;
	}
};

export default ContactService;
