import 'reflect-metadata';
import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { Address } from './address';
import { BaseEntity } from './base-entity';

@Entity()
@ObjectType()
export class User extends BaseEntity {
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
