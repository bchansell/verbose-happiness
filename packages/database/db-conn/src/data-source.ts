import { entities } from './entities';
import { DataSource } from "typeorm"

// TODO: this should be a singleton
async function initializeDataSource() { 
  const postgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    // TODO: this should come from config util
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB + 'migrations',
    entities
  });

  const initialized = postgresDataSource.initialize();

  // TODO: add logger util
  console.log("Data Source has been initialized!")

  return initialized;
}

export default initializeDataSource;