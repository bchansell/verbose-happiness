import 'reflect-metadata';
import { CandidateService } from './../services';
import { Candidate } from '@verbose-happiness/database';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { CandidateInput } from '../types';
import { Service } from 'typedi';

@Service()
@Resolver()
export class UserResolver {
  constructor(private readonly userService: CandidateService) {}

  @Query(() => [Candidate])
  users() {
    return this.userService.findAll();
  }

  @Mutation(() => Candidate)
  async createUser(@Arg('data') data: CandidateInput) {
    return this.userService.createUser(data);
  }
}
