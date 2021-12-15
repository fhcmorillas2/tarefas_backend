import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5433/postgres', {
  define: {
    timestamps: false
  }
});

export default sequelize;
