import 'reflect-metadata';
import { CandidateRepository } from '@verbose-happiness/database';
import { Service } from 'typedi';
import { CandidateInput } from '../types';

@Service()
export class CandidateService {
  constructor(
    private readonly candidateRepository: CandidateRepository
  ) { }

  async createUser(userInput: CandidateInput) {
    const user = this.candidateRepository.create({
      ...userInput,
    });

    return this.candidateRepository.save(user);
  }

  async findAll() {
    return this.candidateRepository.find();
  }

  async findUserById(id: string) {
    const user = this.candidateRepository.findOne({
      where: { id },
    });
    return user;
  }
}
