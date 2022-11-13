import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import { UserResolver } from './resolvers';

async function createSchema() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    container: Container,
  });

  return schema;
}

export default createSchema;
