import 'reflect-metadata';
import { entities } from '../entities';
import { DataSource } from "typeorm"
import { Service } from 'typedi';

@Service()
export default class PostgresDb extends DataSource { 
	constructor() {
		super({
			type: "postgres",
			host: "localhost",
			port: 5432,
			// TODO: this should come from config util
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
			entities,
		});
	}
}