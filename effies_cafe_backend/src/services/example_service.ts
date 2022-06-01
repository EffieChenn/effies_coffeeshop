const ExampleService = {
	listItems: async pool => {
		const query = {
			text: 'SELECT first_name, last_name from people order by last_name, first_name asc',
			values: []
		};

		const queryResult = await pool.query(query);

		return queryResult.rows;
	}
};

export default ExampleService;
