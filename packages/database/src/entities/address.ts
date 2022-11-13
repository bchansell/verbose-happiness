import "reflect-metadata"
import { Entity, Column, OneToOne } from "typeorm"
import { Field, ObjectType } from 'type-graphql'
import { User } from './user'
import { BaseEntity } from './base-entity'

@Entity()
@ObjectType()
export class Address extends BaseEntity {
    @Field()
    @Column()
    firstLine: string

    @Field()
    @Column()
    secondLine: string

    @Field()
    @Column()
		postCode: boolean
	
    @Field()
		@Column()
		county: boolean
	
    @Field()
		@Column()
    country: boolean
  
    // bi directional -> bit strange getting user from address
    // proving out functionality 
    // TODO: lazy loading
    @OneToOne(type => User, user => user.address)
    user: User;
}