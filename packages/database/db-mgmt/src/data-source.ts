import { entities } from '@verbose-happiness/db-conn';
import { DataSource } from "typeorm"

const postgresDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	// TODO: this should come from config util
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	entities,
	migrations: ['./migrations/*.ts'],
});

export default postgresDataSource;