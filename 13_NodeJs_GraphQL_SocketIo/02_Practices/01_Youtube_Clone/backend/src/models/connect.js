// Chuỗi kết nối
/**
  Sequelize-auto

  sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName]

  yarn sequelize-auto -h localhost -d db_youtube -u root -x 123456 -p 3307 --dialect mysql -o src/models -l esm
 */

import Sequelize from 'sequelize';
import envConfig from '../config/env.config.js';

const { database, user, pass, host, port, dialect } = envConfig;

const sequelize = new Sequelize(database, user, pass, {
  host,
  port,
  dialect,
});

export default sequelize;
