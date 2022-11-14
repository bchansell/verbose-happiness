import { PostgresDb } from '@verbose-happiness/database';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import { UserResolver } from './resolvers';

async function createSchema() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    container: Container,
    emitSchemaFile: true,
  });

  // TODO: refactor out hack to intialise
  const db = Container.get(PostgresDb);
  await db.initialize();

  return schema;
}

export default createSchema;
