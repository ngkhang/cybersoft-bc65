import sequelize from '../models/connect.js';
import initModels from '../models/init-models.js';
// import User from '../models/user-v1.js';

const model = initModels(sequelize);

// Handle logic for User
const getUser = async (request, response) => {
  // let users = await User.findAll();
  let users = await model.video.findAll({
    where: {
      video_id: 3
    },
    include: ["type"], // include: [as_property]
  });
  response.send(users);
};

const createUser = (request, response) => {
  response.send('create User');
}

export { getUser, createUser };
