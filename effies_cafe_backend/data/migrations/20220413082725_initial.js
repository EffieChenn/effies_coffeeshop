export const SCHEMA = 'cafe';

export async function up(knex) {
	await knex.raw(`
		create schema ${SCHEMA};

		create table ${SCHEMA}.people(
		    id serial8 primary key,
		    first_name varchar(100) not null,
		    last_name varchar(100) not null
		);

		create unique index unique_first_last on ${SCHEMA}.people (first_name, last_name);
	`);
}

export async function down(knex) {
	await knex.raw(`
		drop table ${SCHEMA}.people cascade;
		drop schema ${SCHEMA};
	`);
}
