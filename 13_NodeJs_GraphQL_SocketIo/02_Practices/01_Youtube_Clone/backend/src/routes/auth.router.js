import express from 'express';
import { forgetCheckCode, forgetCheckEmail, login, loginFacebook, signUp } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/sign-up', signUp);
authRouter.post('/login', login);

// Login Facebook
authRouter.post('/login-face', loginFacebook);

// Kiểm tra quên mật khẩu
authRouter.post('/forget-check-email', forgetCheckEmail);

// Kiểm tra Code xác nhận
authRouter.post("/forget-check-code", forgetCheckCode);

// Đổi mật khẩu
// Gửi mail, pass mới kèm code để cập nhật

export default authRouter;
