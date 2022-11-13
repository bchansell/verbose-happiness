import { Candidate } from '@verbose-happiness/database';
import { Inject, Service } from 'typedi';
import { Repository } from 'typeorm';
import { CandidateInput } from '../types';

@Service()
export class CandidateService {
  constructor(
    @Inject()
    private readonly userRepository: Repository<Candidate>
  ) { }

  async createUser(userInput: CandidateInput) {
    const user = this.userRepository.create({
      ...userInput,
    });

    return this.userRepository.save(user);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findUserById(id: string) {
    const user = this.userRepository.findOne({
      where: { id },
    });

    return user;
  }
}
