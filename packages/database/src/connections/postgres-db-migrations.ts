import { entities } from '../entities';
import { DataSource } from 'typeorm';

export default class PostgresDbMigrations extends DataSource {
  constructor() {
    super({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      // TODO: this should come from config util
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities,
      migrations: ['./src/migrations/*.ts'],
    });
  }
}
