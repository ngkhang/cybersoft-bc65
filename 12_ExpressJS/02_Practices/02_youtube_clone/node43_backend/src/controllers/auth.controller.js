import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { responseData } from '../config/response.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { sendMail } from '../config/mail.js';

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

const loginFacebook = async (req, res) => {
  let { faceAppId, fullName, email } = req.body;

  let checkUser = await model.users.findOne({
    where: {
      face_app_id: id
    }
  });

  if (!checkUser) {
    let newData = {
      full_name: fullName,
      email,
      pass_word: '',
      avatar: '',
      face_app_id: faceAppId,
      role: 'USER',
      refresh_token: '',
    }

    await model.users.create(newData);
  }

  let token = '';
  responseData(token, 'Đăng nhập thành công', 200, res);
}

const forgetCheckMail = async (req, res) => {
  let { email } = req.body;

  let checkMail = await model.users.findOne({
    where: {
      email,
    }
  });

  if (checkMail) {
    let randomCode = crypto.randomBytes(5).toString('hex');
    let newCode = {
      code: randomCode,
      expired: new Date(new Date().getTime() + 10 * 60000)
    }
    await model.code.create(newCode);

    sendMail(email, "Mã xác thực", randomCode);

    responseData('', 'Đăng nhập thành công', 200, res);
    return;
  }

  responseData('', 'Email không đúng', 403, res);
}

const forgetCheckCode = async (req, res) => {
  let { code } = req.body;

  let checkCode = await model.code.findOne({
    where: {
      code,
    }
  })

  if (checkCode) {
    // Xóa code
    await model.code.destroy({
      where: {
        id: checkCode.dataValues.id
      },
    });

    responseData('', 'Thành công', 200, res);
    return;
  }
  responseData('', 'Code không đúng', 403, res);
}

export {
  signUp,
  login,
  loginFacebook,
  forgetCheckMail,
  forgetCheckCode,
}
