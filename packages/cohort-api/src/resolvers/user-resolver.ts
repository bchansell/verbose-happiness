import 'reflect-metadata';
import { Address } from './../../../database/src/entities/address';
import { CandidateService } from './../services';
import { Candidate } from '@verbose-happiness/database';
import { Resolver, Query, Mutation, Arg, Info, Root, FieldResolver } from 'type-graphql';
import { CandidateInput } from '../types';
import { Service } from 'typedi';
import { GraphQLResolveInfo } from 'graphql';
// import { Fields } from '../decorators/fields';

@Service()
@Resolver(of => Candidate)
export class UserResolver {
  constructor(private readonly candidateService: CandidateService) {}

  @Query(() => [Candidate])
  candidates(@Info() _fields: GraphQLResolveInfo) {
    return this.candidateService.findAll();
  }

  @Query(() => Candidate, { nullable: true })
  candidate(@Info() _fields: GraphQLResolveInfo, @Arg("id") id: string) {
    return this.candidateService.findUserById(id);
  }

  @Mutation(() => Candidate)
  async createCandidates(@Arg('data') data: CandidateInput) {
    return this.candidateService.createUser(data);
  }

  @FieldResolver(() => Address)
  async address(@Root() candidate: Candidate) {
    return candidate.address;
  }
  
  // TODO: nested types?
  // 1.With Lazy loading this ends up in 2 DB calls
  // 2.With Resolvers with ends up as 2 DB calls
  // option 2 is mitigated by with DataLoader
  // can option 1 be mitigated in the same way?
}
