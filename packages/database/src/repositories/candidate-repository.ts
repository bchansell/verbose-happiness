import 'reflect-metadata';
import { PostgresEntityManager } from '../connections/postgres-entity-manager';
import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { Candidate } from '../entities';

@Service()
export class CandidateRepository extends Repository<Candidate> {
  constructor(entityManager: PostgresEntityManager) {
    super(Candidate, entityManager)
  }
 }