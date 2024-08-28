// Xử lý riêng chức năng cho User
import responseData from '../config/response.js';
import sequelize from '../models/connect.js';
import initModels from '../models/init-models.js';

const model = initModels(sequelize);

const getUser = async (req, res) => {
  let data = await model.users.findAll();
  responseData(data, 'Thành công', 200, res);
}

export {
  getUser,
};
