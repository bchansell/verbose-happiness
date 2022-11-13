import { UserService } from './../services'
import 'reflect-metadata';
import { User } from '@verbose-happiness/database'
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { UserInput } from '../types';
import { Service } from 'typedi';

@Service()
@Resolver()
export class UserResolver {
	constructor(
		private readonly userService: UserService,
	) {}

  @Query(() => [User])
  users() {
		return this.userService.findAll();
	}
	
	@Mutation(() => User)
	async createUser(@Arg("data") data: UserInput) {
		return this.userService.createUser(data);
	}
}