import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Address } from "./Address"
import IEntity from "./IEntity"

@Entity()
export class ContactDetails implements IEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    mobilePhoneNumber: string

    @Column()
    telephoneNumber: string

		@OneToOne(() => Address)
		@JoinColumn()
    address: Address
}