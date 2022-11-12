import { ContactDetails } from './ContactDetails';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import IEntity from "./IEntity"

@Entity()
export class User implements IEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean

    @OneToOne(() => ContactDetails)
    @JoinColumn()
    pdsContactDetails?: ContactDetails

    @OneToOne(() => ContactDetails)
    @JoinColumn()
    testRegistrationDetails?: ContactDetails   
}