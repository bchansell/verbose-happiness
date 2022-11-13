import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import createSchema from './schema';

async function main() {
	const schema = await createSchema();
	const server = new ApolloServer({ schema })
  await server.listen(4000)
	console.log("Server has started!");
}
main();