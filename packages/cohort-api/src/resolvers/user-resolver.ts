import 'reflect-metadata';
import { CandidateService } from './../services';
import { Candidate } from '@verbose-happiness/database';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { CandidateInput } from '../types';
import { Service } from 'typedi';

@Service()
@Resolver()
export class UserResolver {
  constructor(private readonly candidateService: CandidateService) {}

  @Query(() => [Candidate])
  candidates() {
    return this.candidateService.findAll();
  }

  @Mutation(() => Candidate)
  async createCandidates(@Arg('data') data: CandidateInput) {
    return this.candidateService.createUser(data);
  }

  // TODO: nested types?
}
