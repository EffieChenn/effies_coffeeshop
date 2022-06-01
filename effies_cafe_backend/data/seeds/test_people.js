export async function seed(knex) {
	// Deletes ALL existing entries
	await knex('people').del();

	// Inserts seed entries
	await knex('people').insert([
		{first_name: 'Test', last_name: 'User'},
		{first_name: 'Someone', last_name: 'Else'}
	]);
}
