import 'reflect-metadata';
import { Address } from '@verbose-happiness/database'
import { InputType, Field } from "type-graphql";

@InputType({ description: "New address" })
export default class AddressInput implements Partial<Address> {  
    @Field()
    firstLine: string

    @Field()
    secondLine: string

    @Field()
		postCode: boolean
	
    @Field()
		county: boolean
	
    @Field()
    country: boolean
}
