import 'reflect-metadata';
import { DataSource } from 'typeorm';

export class PostgresDb extends DataSource {
  constructor() {
    super({
      type: 'postgres',
      port: 5432,
      // TODO: this should come from config util
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: ['src/entities/**/*.ts'],
      migrations: ['src/migrations/**/*.ts'],
    });
  }
}
