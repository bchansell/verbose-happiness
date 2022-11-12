import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import BaseRepository from './base-repository';

export default class UserRepository extends BaseRepository<User> { 
	constructor(dataSource: DataSource) {
		super(dataSource, User);
	}
}