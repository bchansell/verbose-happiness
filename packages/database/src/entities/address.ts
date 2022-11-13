import 'reflect-metadata';
import { Entity, Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { Candidate } from './candidate';

// TODO: start creating generics?
@Entity()
@ObjectType()
export class Address {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  firstLine: string;

  @Field()
  @Column()
  secondLine: string;

  @Field()
  @Column()
  postCode: boolean;

  @Field()
  @Column()
  county: boolean;

  @Field()
  @Column()
  country: boolean;

  // bi directional -> bit strange getting user from address
  // proving out functionality
  // TODO: lazy loading
  @OneToOne((type) => Candidate, (user) => user.address)
  user: Candidate;
}
