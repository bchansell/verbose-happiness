import { User } from '@verbose-happiness/database'
import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { UserInput } from '../types';

@Service()
export class UserService { 
	constructor(
		private readonly userRepository: Repository<User>
	) { }
	
	async createUser(userInput: UserInput) { 
		const user = this.userRepository.create({
			...userInput
		});

		return this.userRepository.save(user);
	}

	async findAll() {
		return this.userRepository.find()
	}

	async findUserById(id: string) { 
		const user = this.userRepository.findOne({
			where: { id }
		})

		return user;
	}
}