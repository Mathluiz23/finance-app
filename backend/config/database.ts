import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME || 'finance_db', process.env.DB_USER || 'root', process.env.DB_PASSWORD || '', {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
});

export default sequelize;
