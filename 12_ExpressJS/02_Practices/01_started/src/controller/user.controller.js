import sequelize from '../models/connect.js';
// Option 1: Manual define model
// import User from '../models/users-v1.js';

// Option 2: Using library: sequelize-auto - Database first
import initModels from '../models/init-models.js';
const model = initModels(sequelize);

// Get all users
const getUser = async (request, response) => {
  // Option 1:
  // let users = await User.findAll();

  // Option 2:
  let users = await model.video.findAll();

  response.send(users);
};

const createUser = (request, response) => {
  response.send('create User');
}

export { getUser, createUser };
