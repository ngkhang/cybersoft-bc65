// Xử lý riêng chức năng cho User
import sequelize from '../models/connect.js';
import initModels from '../models/init-models.js';

const model = initModels(sequelize);

const getUser = async (req, res) => {
  let data = model.users.findAll();

  res.send(data);
}

export {
  getUser,
};
