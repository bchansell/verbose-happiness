import 'reflect-metadata';
import { Entity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { Address } from './address';

@Entity()
@ObjectType()
export class Candidate {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // graphql
  @Field()
  // typeorm
  @Column()
  firstName: string;

  // graphql
  @Field()
  // typeorm
  @Column()
  lastName: string;

  // graphql
  @Field()
  // typeorm
  @Column()
  age: number;

  // graphql
  @Field()
  // typeorm
  @Column()
  isActive: boolean;

  // graphql
  @Field(() => Address, { nullable: true })
  // typeorm
  // TODO: lazy loading
  @JoinColumn()
  @OneToOne(() => Address, (address) => address.user, {
    cascade: true,
    nullable: true,
  })
  address?: Address;
}
