import { PrimaryGeneratedColumn } from 'typeorm';
import { Field } from 'type-graphql';

interface IEntity {
  id: string;
}

export class BaseEntity implements IEntity {
  // graphql
  @Field()
  // typeorm
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
