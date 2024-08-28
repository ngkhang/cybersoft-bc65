import responseData from '../config/response.js';
import sequelize from '../models/connect.js';
import initModels from '../models/init-models.js';
import bcrypt from 'bcrypt';

import crypto from 'crypto'
import { sendMail } from "../config/mail.js"
import { createToken } from '../config/jwt.js';

const model = initModels(sequelize);

const signUp = async (req, res) => {
  let { fullName, email, password } = req.body;

  // Check Email
  let checkEmail = await model.users.findOne({
    where: {
      email,
    }
  })

  if (checkEmail) {
    responseData('', 'Email đã tồn tại', 409, res);
    return;
  }

  const newUser = {
    full_name: fullName,
    email,
    avatar: '',
    pass_word: bcrypt.hashSync(password, 10),
    face_app_id: '',
    role: 'USER',
    refresh_token: ''
  }

  // Insert into values
  await model.users.create(newUser);

  responseData('', 'Đăng ký thành công', 201, res)
}

const login = async (req, res) => {
  let { email, password } = req.body;

  let checkEmail = await model.users.findOne({
    where: {
      email,
    }
  });
  console.log(bcrypt.compareSync(password, checkEmail.pass_word))

  if (checkEmail) {
    if (bcrypt.compareSync(password, checkEmail.pass_word)) {
      // Create token
      let token = createToken({ userId: checkEmail.dataValues.user_id });

      responseData(token, "Đăng nhập thành công", 200, res);
    }
    else {
      responseData("", "Mật khẩu không đúng !", 403, res);
    }
  }
  else responseData('', 'Email không đúng !', 403, res);
}

const loginFacebook = async (req, res) => {
  let { faceAppId, fullName, email } = req.body;

  // Check face_app_id
  let checkUser = await model.users.findOne({
    where: {
      face_app_id: faceAppId,
    }
  })

  // Chưa tồn tại
  if (!checkUser) {
    let newData = {
      full_name: fullName,
      email,
      avatar: "",
      pass_word: "", //salt
      face_app_id: faceAppId,
      role: "USER",
      refresh_token: ""
    }

    // Insert into values
    await model.users.create(newData);
  }

  // let token = createToken({ userId: checkUser.dataValues.user_id });
  let token = 'token';
  responseData(token, "Đăng nhập thành công", 200, res);
}

const forgetCheckEmail = async (req, res) => {
  let { email } = req.body;

  let checkEmail = await model.users.findOne({
    where: {
      email,
    }
  })

  if (checkEmail) {
    // Tạo code xác nhận
    let randomCode = crypto.randomBytes(5).toString('hex');
    let newCode = {
      code: randomCode,
      expired: new Date(new Date().getTime() + 10 * 60000),
    }

    await model.code.create(newCode);

    // Gửi mail
    sendMail(email, "Mã xác thực", "<b style='color:red'>" + randomCode + "</b>");
    responseData("", "Thành công", 200, res);
  }
  else responseData("", "Email không đúng !", 403, res);
}

const forgetCheckCode = async (req, res) => {
  let { code } = req.body;

  let checkCode = await model.code.findOne({
    where: {
      code,
    }
  })

  if (checkCode) {
    // Xóa code hoặc xóa sau khi đổi mật khẩu
    await model.code.destroy({
      where: {
        id: checkCode.dataValues.id,
      }
    })

    responseData("", "Thành công", 200, res);
  } else responseData("", "Code không đúng !", 403, res);
}

export {
  signUp,
  login,
  loginFacebook,
  forgetCheckCode,
  forgetCheckEmail,
}
