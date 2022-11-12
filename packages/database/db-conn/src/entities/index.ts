import { Address } from './Address';
import { ContactDetails } from './ContactDetails';
import { User } from './User';

export * from './User'
export * from './Address'
export * from './ContactDetails'

export const entities = [
	User,
	Address,
	ContactDetails
]