
export const development = {
  client: 'postgresql',
  connection: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5433/postgres',
  migrations: {
    tableName: 'knex_migrations'
  }
};
