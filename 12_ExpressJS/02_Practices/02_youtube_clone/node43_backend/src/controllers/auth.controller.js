import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { responseData } from '../config/response.js';
import bcrypt from 'bcrypt';

const model = initModels(sequelize);

const signUp = async (req, res) => {
  let { fullName, email, password } = req.body;

  // Check email exist:
  let isExistEmail = await model.users.findOne({
    where: {
      email,
    }
  });

  if (isExistEmail) {
    responseData('', 'Email đã tồn tại', 409, res);
    return;
  }

  let newData = {
    full_name: fullName,
    email,
    pass_word: bcrypt.hashSync(password, 10),
    avatar: '',
    face_app_id: '',
    role: 'USER',
    refresh_token: '',
  }

  await model.users.create(newData);
  responseData('', 'Đăng ký thành công', 201, res);
};

const login = async (req, res) => {
  let { email, password } = req.body;

  let checkEmail = await model.users.findOne({
    where: {
      email,
    }
  })

  if (checkEmail) {
    if (bcrypt.compareSync(password, checkEmail.pass_word)) {
      let token = '';
      responseData(token, 'Đăng nhập thành công', 200, res);
    }
    else {
      responseData('', 'Mật khẩu không đúng', 403, res);
      return;
    }
    responseData('', 'Email không đúng', 403, res);
  }
};

export {
  signUp,
  login,
}
