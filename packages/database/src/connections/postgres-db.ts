import 'reflect-metadata';
import { Service } from 'typedi';
import { DataSource } from 'typeorm';
import { entities } from '../entities';

@Service()
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
      // TODO: figure out path glob 
      // entities: ['src/entities/**/*.ts'],
      entities,
      migrations: ['src/migrations/**/*.ts'],
      logging: true
    });
  }
}
