import 'reflect-metadata';
import { InputType, Field } from 'type-graphql';
import { Min } from 'class-validator';
import AddressInput from './address-input';
import { User } from '@verbose-happiness/database';

// Omitting address since the two entities are created at the same time
@InputType({ description: 'New user data' })
export default class UserInput implements Omit<Partial<User>, 'address'> {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Min(70)
  @Field()
  age: number;

  @Field()
  isActive: boolean;

  @Field((type) => AddressInput, { nullable: true })
  address?: AddressInput;
}
