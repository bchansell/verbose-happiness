import { PostgresDatabaseConnection } from '@verbose-happiness/database';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import { UserResolver } from './resolvers';

async function createSchema() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    container: Container,
  });

  // TODO: this is a super hack.
  // need a hook to initialise the DB conn
  const conn = Container.get(PostgresDatabaseConnection);
  await conn.initialize();

  return schema;
}

export default createSchema;
