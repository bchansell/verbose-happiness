import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import IEntity from "./IEntity"

@Entity()
export class Address implements IEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    firstLine: string

    @Column()
    secondLine: string

    @Column()
		postCode: boolean
	
		@Column()
		county: boolean
	
		@Column()
    country: boolean
}