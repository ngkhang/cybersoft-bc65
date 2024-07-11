import { Sequelize } from 'sequelize';
import config from '../config/config.js';

// Option 3:
// const sequelize = new Sequelize({
//   database: 'db_youtube',
//   username: 'root',
//   password: '123456',
//   host: 'localhost',
//   port: '3307',
//   dialect: 'mysql',
// });
const sequelize = new Sequelize(config);

export default sequelize;

// Test connect database
// try {
//   await sequelize.authenticate();
//   console.log('Success');
// } catch (error) {
//   console.log('Error: ', error);
// }