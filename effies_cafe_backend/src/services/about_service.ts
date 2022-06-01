const AboutService = {
    listContent: async pool => {
		const query = {
			text: "Select * from about WHERE id=2 ;",
			values: []
		};

		const queryResult = await pool.query(query);
        //console.dir(queryResult);
		return queryResult.rows;
	}
};

export default AboutService;