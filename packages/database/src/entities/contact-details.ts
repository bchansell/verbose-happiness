import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinTable,
} from 'typeorm';
import { Address } from './address';
import { BaseEntity } from './base-entity';

@Entity()
export class ContactDetails extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  mobilePhoneNumber: string;

  @Column()
  telephoneNumber: string;

  @OneToOne(() => Address)
  @JoinTable()
  address: Address;
}
