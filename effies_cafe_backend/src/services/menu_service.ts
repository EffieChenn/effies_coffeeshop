const MenuService = {
    listItems: async pool => {
		const query = {
			text: "Select * from menu m  Natural Join images i ;",
			values: []
		};

		const queryResult = await pool.query(query);
        console.dir(queryResult);
		return queryResult.rows;
	}
};

export default MenuService;