import 'reflect-metadata';
import { Service } from 'typedi';
import { EntityManager } from 'typeorm';
import { PostgresDb } from './postgres-db';

@Service()
export class PostgresEntityManager extends EntityManager { 
  constructor(dataSource: PostgresDb) {
    super(dataSource)
  }
}