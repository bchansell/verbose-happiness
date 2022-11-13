import { Address } from './address';
import { ContactDetails } from './contact-details';
import { User } from './user';

export * from './user'
export * from './address'
export * from './contact-details'

export const entities = [
	User,
	Address,
	ContactDetails
]