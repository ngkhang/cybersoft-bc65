import { Sequelize } from 'sequelize';
import config from '../config/config.js';

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(config);

export default sequelize;

// // Test connect database
// try {
//   await sequelize.authenticate();
//   console.log('Success');
// } catch (error) {
//   console.log('Error: ', error);
// }