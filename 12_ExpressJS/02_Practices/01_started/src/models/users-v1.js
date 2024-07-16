// Define model theo cách thủ công
import { Model, DataTypes } from 'sequelize';
import sequelize from './connect.js';

// Khai báo lại tất cả properties, data type, thông tin mở rộng ứng với table
class User extends Model { }

User.init(
  // Attributes
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    pass_word: {
      type: DataTypes.STRING,
    },
    face_app_id: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.STRING,
    },
  },
  // Options
  {
    sequelize,          // Connect database
    modelName: "User",  // Model name

    // Mapping đúng với table trong database
    tableName: 'users', // Table name
    timestamps: false,
    /*
      timestamps = true -> Auto add 2 column updateAt and createAt -> Database sẽ bị chỉnh sửa

      updateAt: {
        type: DataTypes.STRING,
      },
      createAt: {
        type: DataTypes.STRING,
      },
    */
  });

export default User;
